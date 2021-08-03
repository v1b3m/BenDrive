import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Box
} from "@chakra-ui/react";
import React, { ChangeEventHandler } from "react";
import { FaSearch } from "react-icons/fa";

interface HeaderProps {
  isSearching: boolean;
  searchTerm: string;
  onChangeText: ChangeEventHandler<HTMLInputElement>;
}

export default function Header({
  isSearching,
  searchTerm,
  onChangeText
}: HeaderProps): JSX.Element {
  return (
    <Flex
      p="1.5rem 2rem"
      pos="fixed"
      w="100%"
      bg="brand.mediumAquamarine"
      align="center"
      boxShadow="0 3px 15px #05386b"
      justify="space-between"
    >
      <Text fontSize="2rem" color="brand.prussianBlue">
        BenDrive
      </Text>
      <Box>
        <InputGroup>
          <Input
            isDisabled={isSearching}
            minW="20rem"
            maxW="30rem"
            borderColor="brand.imperialRed"
            borderWidth="2px"
            focusBorderColor="brand.prussianBlue"
            color="brand.prussianBlue"
            value={searchTerm}
            onChange={onChangeText}
          />
          <InputRightAddon color="brand.prussianBlue" cursor="pointer">
            <FaSearch />
          </InputRightAddon>
        </InputGroup>
      </Box>
    </Flex>
  );
}
