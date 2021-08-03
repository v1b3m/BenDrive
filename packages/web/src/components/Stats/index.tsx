import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdClose } from "react-icons/md";
import { ListItem } from "../../types";
import { bytesToSize, filename } from "../../utils";

interface StatProps {
  label: string;
  value: string;
}

interface Props {
  selected?: ListItem;
  setSelected: (selected?: ListItem) => void;
}

function Stat({ label, value }: StatProps) {
  return (
    <Box m="1rem 0">
      <Text display="inline" fontWeight="bold">
        {label}{" "}
      </Text>
      <Text display="inline">{value}</Text>
    </Box>
  );
}

export default function Stats({ selected, setSelected }: Props): JSX.Element {
  return (
    <Box
      maxW={selected ? 300 : 0}
      overflow="hidden"
      transition={
        selected ? "max-width 0.3s ease-in" : "max-width 0.35s ease-out"
      }
      boxShadow="-3px 0 15px #05386b"
      p={selected ? "1rem" : 0}
      color="brand.prussianBlue"
      maxH="30rem"
    >
      <Flex align="center" justify="space-between">
        <Text fontWeight="bold" color="brand.beige" fontSize="24">
          STATS
        </Text>
        <Box
          cursor="pointer"
          transition="transform .7s ease-in-out"
          _hover={{ transform: "rotate(360deg)" }}
          onClick={() => setSelected(undefined)}
        >
          <MdClose size={20} />
        </Box>
      </Flex>

      <Stat label="NAME:" value={filename(selected?.path)} />
      <Stat label="PATH:" value={selected?.path as string} />
      <Stat label="SIZE:" value={bytesToSize(selected?.stats.size as number)} />
      <Stat
        label="CREATED:"
        value={new Date(selected?.stats.birthtime as Date).toString()}
      />
    </Box>
  );
}
