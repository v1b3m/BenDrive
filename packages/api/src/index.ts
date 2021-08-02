import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

export const root = {
  hello: (): string => {
    return "Hello world!";
  }
};

const app = express();
app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.listen(4000, () => {
  console.log("Listening on http://localhost:4000/graphql");
});
