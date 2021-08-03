import { buildSchema } from "graphql";
import { DateTimeTypeDefinition } from "graphql-scalars";

export const schema = buildSchema(`
    ${DateTimeTypeDefinition}

    type Query {
        hello: String       
        listing(path: String, page: Int, pageSize: Int): [ListItem]
    }

    type Stat {
        dev: Int!
        mode: Int!
        nlink: Int!
        uid: Int!
        gid: Int!
        rdev: Int!
        blksize: Int!
        ino: Int!
        size: Int!
        blocks: Int!
        atimeMs: Float!
        mtimeMs: Float!
        ctimeMs: Float!
        birthtimeMs: Float!
        atime: DateTime!
    }

    type ListItem {
        path: String!
        isFile: Boolean!
        stats: Stat!
    }
`);
