import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<App />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

});


// FURTHER TESTS

// DOES THE ARRAY OF totalListItems BEGIN AT ZERO WHEN USED FOR THE FIRST TIME?
// With useState set to [], expect totalListItems to be an empty array.


// DOES THE ARRAY OF totalListItems BEGIN BY DISPLAYING THE LIST STORED IN LOCAL STORAGE?
// Get the array of list items from local storage.
// Expect totalListItems to be identical to the array from local storage.


// DOES totalListItems EQUAL THAT WHICH IS IN LOCAL STORAGE WHEN THE LIST INCREMENTS?
// Get the array of items in local storage.
// Append an object to totalListItems.
// Get the updated array of items in totalListItems.
// Expect the array of items in local storage to equal the updated totalListItems.


// IS THE h1 DISPLAYED, AND ARE InputBox, AND List MOUNTED?
// Set totalListItems as empty array.
// Expect the instance of the h1, List and InputBox to be true.
// Set totalListItems as an array containing todo objects.
// Expect the instance of the h1, List and InputBox to be true.


