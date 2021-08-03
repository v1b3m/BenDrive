import { Box, Center, Input } from "@chakra-ui/react";
import { gql } from "graphql-request";
import React, { ChangeEvent, useEffect, useState } from "react";
import Header from "./components/Header";
import { useDebounce } from "./hooks/useDebounce";
import { client } from "./requests";

const getListing = gql`
  query GetListing($path: String, $page: Int = 1, $pageSize: Int = 10) {
    listing(path: $path, page: $page, pageSize: $pageSize) {
      path
      isFile
      stats {
        size
        atime
      }
    }
  }
`;

const getDirectoryListing = (path: string, page = 1, pageSize = 10) =>
  client.request(getListing, {
    path,
    page,
    pageSize
  });

function App(): JSX.Element {
  const [listing, setListing] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState("");

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (
      debouncedSearchTerm &&
      debouncedSearchTerm !== "/" &&
      debouncedSearchTerm !== ""
    ) {
      setIsSearching(true);

      getDirectoryListing(debouncedSearchTerm)
        .then(results => {
          console.log("results", results);
          setListing(results.listing);
          setIsSearching(false);
        })
        .catch(error => {
          console.error(error);
          setError(error);
        });
    } else {
      setListing([]);
    }
  }, [debouncedSearchTerm]);

  console.log(debouncedSearchTerm, listing);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box>
      <Header />
      <Box p="7rem 2rem" bg="brand.mediumAquamarine" minH="100vh">
        <Center>
          <Input
            maxW="30rem"
            borderColor="brand.imperialRed"
            borderWidth="2px"
            focusBorderColor="brand.prussianBlue"
            color="brand.prussianBlue"
            value={searchTerm}
            onChange={onChangeText}
          />
        </Center>
      </Box>
    </Box>
  );
}

export default App;
