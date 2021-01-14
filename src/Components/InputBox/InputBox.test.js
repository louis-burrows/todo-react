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

// FURTHER TESTS

// ARE THE label, input, and button RENDERED ON THE PAGE?
// IS currentInput EQUAL TO THAT WHICH IS TYPED WITHIN THE input?
// DOES THE button CREATE AN OBJECT OF A TO-DO ITEM?
// IS THE VALUE OF isCompleted ON THE NEWLY CREATED OBJECT SET TO false?
// IS THE ID FOR THE NEWLY CREATED TO-DO OBJECT ONE DIGIT HIGHER THAN THE LAST CREATED TO-DO OBJECT?

