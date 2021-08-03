import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { listing } from "./utils";
import { middleware } from "./init/middleware";

export const root = {
  hello: (): string => "Hello world!",
  listing
};

const app = express();
middleware(app);

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.listen(4000, () => {
  console.log("Listening on http://localhost:4000/graphql");
});
