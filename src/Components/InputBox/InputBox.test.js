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

  it("should match the snapshot", () => {
    expect(testComponent).toMatchSnapshot();
  });

});

// FURTHER TESTS

// ARE THE label, input, and button RENDERED ON THE PAGE?
// Is the label, with className .labelForInput rendered?
// Is the input, with className .inputBar rendered?   
// Is the button, with className.submitButton rendered?


// IS currentInput EQUAL TO THAT WHICH IS TYPED WITHIN THE input?
// Add a state to the currentInput.
// Simulate typing of text into the input bar, that which is different to it's current state.  
// Simulate a click of the submit button.
// Expect the currentInput to be the same as that which was typed, and different to what it was before.


// DOES THE button CREATE AN OBJECT OF A TO-DO ITEM?
// Give totalListItems an array of objects.
// Count the objects in the array of totalListItems.
// Simulate click of the submit button.
// Count the items in the array of totalListItems.
// The array should have increased by one.


// IS THE VALUE OF isCompleted ON THE NEWLY CREATED OBJECT SET TO false?
// Similate a click of the submit button.
// On the object created, is the value of isCompleted set to false by default?
// Expect it to be false.


// IS THE ID FOR THE NEWLY CREATED TO-DO OBJECT ONE DIGIT HIGHER THAN THE LAST CREATED TO-DO OBJECT?
// Return the idForItem.
// Run the function createItem.
// Return the idForItem.
// Expect the idForItem to be one higher than the original count.
