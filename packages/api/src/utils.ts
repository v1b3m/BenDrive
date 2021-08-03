import fs from "fs";
import glob from "glob";
import _ from "lodash";
import { ListingParams, ListItem } from "./types";

export const getDirectories = (src: string): string[] =>
  glob.sync(src + "/**/*");

const memoizedGetDirectories = _.memoize(getDirectories);

export const isFile = (path: string): boolean => fs.lstatSync(path).isFile();
export const isDirectory = (path: string): boolean =>
  fs.lstatSync(path).isDirectory();

export const pathsWithStats = (
  paths: string[]
): {
  path: string;
  stats: fs.Stats;
  isFile: boolean;
}[] =>
  paths.map(path => ({
    path,
    stats: fs.lstatSync(path),
    isFile: fs.lstatSync(path).isFile()
  }));

export function paginate<T>(array: T[], page_size = 10, page_number = 1): T[] {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const listing = ({ path, page, pageSize }: ListingParams): ListItem[] =>
  paginate(pathsWithStats(memoizedGetDirectories(path)), pageSize, page);
