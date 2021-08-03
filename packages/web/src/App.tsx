import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { client } from "./requests";
import { gql } from "graphql-request";

const query = gql`
  query Hola {
    hello
  }
`;

function App(): JSX.Element {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    client.request(query).then(console.log);
  }, []);

  return (
    <Box>
      <Header />
      <Box p="7rem 2rem">Hey</Box>
    </Box>
  );
}

export default App;
