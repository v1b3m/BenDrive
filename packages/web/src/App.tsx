import { Box, Flex, Button, Center } from "@chakra-ui/react";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Stats from "./components/Stats";
import { useDebounce } from "./hooks/useDebounce";
import { useHistory } from "./hooks/useHistory";
import { getDirectoryListing } from "./requests";
import { ListItem } from "./types";
import { containsSubString } from "./utils";

function App(): JSX.Element {
  const [listing, setListing] = useState<ListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<ListItem>();
  const [page, setPage] = useState(1);

  const { state, set: setHistory, canUndo, undo } = useHistory("");

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (state) {
      setSearchTerm(state);
    }
  }, [state]);

  useEffect(() => {
    if (debouncedSearchTerm !== "/" && debouncedSearchTerm !== "") {
      setIsSearching(true);

      getDirectoryListing(debouncedSearchTerm)
        .then(results => {
          setIsSearching(false);
          setListing(results.listing);
          setHistory(debouncedSearchTerm);
          setError("");
        })
        .catch(error => {
          setError(error);
        });
    } else {
      setListing([]);
    }
  }, [debouncedSearchTerm]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const getSubDirectories = useCallback(() => {
    return listing.filter(({ isFile }) => !isFile);
  }, [listing]);

  const subDirectories = getSubDirectories();

  const getNotInSubDirectory = useCallback(() => {
    return listing.filter(
      ({ path }) =>
        !subDirectories.some(element =>
          containsSubString(path, `${element.path}/`)
        )
    );
  }, [subDirectories, listing]);

  const notInSubDirectory = getNotInSubDirectory();

  const loadMore = () => {
    getDirectoryListing(debouncedSearchTerm, page + 1)
      .then(results => {
        setIsSearching(false);
        setListing([...listing, ...results.listing]);
        setPage(page + 1);
        setError("");
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <Box bg="brand.mediumAquamarine">
      <Header
        isSearching={isSearching}
        onChangeText={onChangeText}
        searchTerm={searchTerm}
      />
      <Flex p="7rem 2rem 0 2rem" minH="100vh">
        <Listing
          error={error}
          canUndo={canUndo}
          undo={undo}
          notInSubDirectory={notInSubDirectory}
          setHistory={setHistory}
          setSelected={setSelected}
        />
        <Stats setSelected={setSelected} selected={selected} />
      </Flex>
      {listing.length > 0 && (
        <Center>
          <Button
            m="2rem 0"
            onClick={loadMore}
            bg="brand.prussianBlue"
            _hover={{ bg: "brand.illuminatingEmerald" }}
          >
            Load More
          </Button>
        </Center>
      )}
    </Box>
  );
}

export default App;
