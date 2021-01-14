import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button tests", () => {

  let testComponent;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    testComponent = shallow(<Button text={"test text"} handleClick={mockFn} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

  it("should render the text on the button", () => {
    const buttonContainsText = testComponent.text().includes("test text");
    expect(buttonContainsText).toBe(true);
  });

  it('should call the parent function with click', () => {
    testComponent.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalledWith('click').toBe(true);
  })

  it('the button should have the className of standardButton', () => {
    const hasCorrectClass= testComponent.find('button').hasClass('standardButton');
    expect(hasCorrectClass).toBe(true);
  })


});
