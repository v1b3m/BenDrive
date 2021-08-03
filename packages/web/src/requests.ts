import { gql, GraphQLClient } from "graphql-request";
import { ListItem } from "./types";

export const client = new GraphQLClient("http://localhost:4000/graphql");

const getListing = gql`
  query GetListing($path: String, $page: Int = 1, $pageSize: Int = 10) {
    listing(path: $path, page: $page, pageSize: $pageSize) {
      path
      isFile
      stats {
        size
        birthtime
      }
    }
  }
`;

export const getDirectoryListing = (
  path: string,
  page = 1,
  pageSize = 30
): Promise<{ listing: ListItem[] }> =>
  client.request(getListing, {
    path,
    page,
    pageSize
  });
