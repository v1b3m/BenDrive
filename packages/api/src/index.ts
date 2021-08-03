import express from "express";
import { graphqlHTTP } from "express-graphql";
import { port } from "../config";
import { middleware } from "./init/middleware";
import { schema } from "./schema";
import { listing } from "./utils";

export const root = {
  hello: (): string => "Hello world!",
  listing
};

const app = express();
middleware(app);

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/graphql`);
});
