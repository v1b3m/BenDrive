import fs from "fs";

export interface ListItem {
  path: string;
  isFile: boolean;
  stats: fs.Stats;
}
