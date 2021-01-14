import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Button text={"test text"}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

});
