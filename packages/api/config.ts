import dotenv from "dotenv-safe";
import isCi from "is-ci";

dotenv.config(isCi ? { path: ".env.test" } : {});

export const port = process.env.PORT;
