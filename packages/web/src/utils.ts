export function containsSubString(str: string, substr: string): boolean {
  return str.indexOf(substr) !== -1;
}

export function bytesToSize(bytes: number): string {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
}

export const filename = (path = ""): string => path.replace(/^.*[\\/]/, "");
