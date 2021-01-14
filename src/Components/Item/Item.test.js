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

  it('should toggle the isCompleted component state when clicked', () => {
    expect(component.state('isFaceDown')).toBe(false);
    component.find('.recipeCard').simulate('click');
    expect(component.state('isFaceDown')).toBe(true);
    component.find('.recipeCard').simulate('click');
    expect(component.state('isFaceDown')).toBe(false);
  })


});
