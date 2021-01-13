import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";

describe("Item tests", () => {
  it("should render", () => {
    expect(render(<Item />)).toBeTruthy();
  });
});
