import fs from "fs";
import glob from "glob";

export type getDirectoriesCallback = (
  err: Error | null,
  matches: string[]
) => void;

export const getDirectories = (
  src: string,
  callback: getDirectoriesCallback
): void => {
  glob(src + "/**/*", callback);
};

export const isFile = (path: string): boolean => fs.lstatSync(path).isFile();
export const isDirectory = (path: string): boolean =>
  fs.lstatSync(path).isDirectory();
