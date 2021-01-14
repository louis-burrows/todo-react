import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

describe("Item tests", () => {

  let testComponent;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    testComponent = shallow(<Item />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

  // it('should call the parent function with click', () => {
  //   testComponent.find('.buttonToggle').simulate('click');
  //   expect(mockFn).toHaveBeenCalledWith();
  // })

});

//  DOES THE PARAGRAPH DISPLAY THE PROP OF content?
//  Provide a prop of text content to the component.
//  Expect the content of the paragraph tag to contain the text from the delivered prop.


//  DOES THE DELETE BUTTON CALL THE FUNCTION PASSED AS PROPS?
//  Create a mock function.
//  Deliver the mock function as a prop to the delete button in the manner that it would receive it's function.
//  Simulate a click of the delete button.
//  Expect the mock function to run.


//  DOES THE TOGGLE BUTTON CALL THE FUNCTION PASSED AS PROPS?
//  Create a mock function.
//  Deliver the mock function as a prop to the toggle button in the manner that it would receive it's function.
//  Simulate a click of the delete button.
//  Expect the mock function to run.


//  IS TOGGLING THE completed CLASS OF THE PARAGRAPH REVERSIBLE, DOES THE CLASSNAME REVERT ON EVERY CLICK?
//  Expect the className of the paragraph to be notCompleted.
//  Simulate a click of the toggle button.
//  Expect the className of the paragraph to be isCompleted.
//  Simulate a click of the toggle button.
//  Expect the className of the paragraph to be notCompleted.


//  ARE THE ELEMENTS RENDERED IN THE STATES THEY SHOULD BE PRIOR TO ANY USER INPUT?
//  On the instance of a new component, expect p.className.notCompleted to be true.
//  Expect the paragraph and both buttons to be rendered.
