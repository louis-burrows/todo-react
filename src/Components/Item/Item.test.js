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
  //   expect(mockFn).toHaveBeenCalledWith('click').toBe(true);
  // })

});

//  DOES THE PARAGRAPH DISPLAY THE PROP OF content?
//  DOES THE DELETE BUTTON CALL THE FUNCTION PASSED AS PROPS?
//  DOES THE TOGGLE BUTTON CALL THE FUNCTION PASSED AS PROPS?
//  IS TOGGLING THE completed CLASS OF THE PARAGRAPH REVERSIBLE, DOES THE CLASSNAME REVERT ON EVERY CLICK?

