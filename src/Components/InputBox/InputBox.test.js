import React from "react";
import { shallow } from "enzyme";
import InputBox from "./InputBox";

describe("InputBox tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<InputBox />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

});
