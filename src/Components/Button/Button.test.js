import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Button text={"test text"} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

  it("should render the text on the button", () => {
    const buttonContainsText = testComponent.text().includes("test text");
    expect(buttonContainsText).toBe(true);
  });

  it('the button should have the className of standardButton', () => {
    const hasCorrectClass= testComponent.find('button').hasClass('standardButton');
    expect(hasCorrectClass).toBe(true);
  })

});

// FURTHER TESTS

// DOES THE BUTTON RECEIVE THE PROP OF handleClick?
//"if the button is rendered, the onClick should be the prop of the function {handleClick}"
