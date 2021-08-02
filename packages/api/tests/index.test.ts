import { expect } from "./chai";
import { root } from "../src";

describe("Sample test script", () => {
  it("should pass", () => {
    expect(root.hello()).to.equal("Hello world!");
  });
});
