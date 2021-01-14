import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

describe("Item tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Item />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

});
