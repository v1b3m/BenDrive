import fs from "fs";

export interface Stat {
  dev: number;
  mode: number;
  nlink: number;
  uid: number;
  gid: number;
  rdev: number;
  blksize: number;
  ino: number;
  size: number;
  blocks: number;
  atimeMs: number;
  mtimeMs: number;
  ctimeMs: number;
  birthtimeMs: number;
  atime: string;
}

export interface ListItem {
  path: string;
  isFile: boolean;
  stats: fs.Stats;
}

export interface ListingParams {
  path: string;
  page?: number;
  pageSize?: number;
}
