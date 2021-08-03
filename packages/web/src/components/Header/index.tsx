import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Header(): JSX.Element {
  return (
    <Box p="1.5rem 2rem" pos="fixed" w="100%">
      <Text fontSize="2rem" color="brand.prussianBlue">
        BenDrive
      </Text>
    </Box>
  );
}
