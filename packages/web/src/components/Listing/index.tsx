import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillFileImage, AiFillFolderOpen } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { filename } from "../../utils";
import { ListItem } from "../../types";

interface Props {
  error: string;
  canUndo: boolean;
  undo: () => void;
  notInSubDirectory: ListItem[];
  setSelected: (item: ListItem) => void;
  setHistory: (path: string) => void;
}

export default function Listing({
  error,
  canUndo,
  undo,
  notInSubDirectory,
  setSelected,
  setHistory
}: Props): JSX.Element {
  return (
    <Box w="100%">
      {error !== "" && <Text color="red">{error}</Text>}
      <Grid
        templateColumns="repeat(auto-fill, 6rem)"
        gap="2rem"
        p="0 4rem"
        color="brand.prussianBlue"
      >
        {canUndo && (
          <Box
            onClick={() => undo()}
            _hover={{ color: "brand.illuminatingEmerald" }}
            cursor="pointer"
          >
            <TiArrowBack size={100} />
          </Box>
        )}
        {notInSubDirectory.map(item => {
          const { path, isFile } = item;
          const name = filename(path);

          return (
            <Box
              key={path}
              cursor="pointer"
              _hover={{ color: "brand.illuminatingEmerald" }}
              onDoubleClick={() =>
                !isFile ? setHistory(path) : setSelected(item)
              }
            >
              {isFile ? (
                <AiFillFileImage size={100} />
              ) : (
                <AiFillFolderOpen size={100} />
              )}

              {name}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
