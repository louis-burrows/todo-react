import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("List tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<List />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

});