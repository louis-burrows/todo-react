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

// DOES THE ARRAY OF totalListItems BEGIN AT ZERO?
// DOES THE ARRAY OF totalListItems BEGIN BY DISPLAYING THE LIST STORED IN LOCAL STORAGE?
// DOES totalListItems EQUAL THAT WHICH IS IN LOCAL STORAGE WHEN THE LIST INCREMENTS?
// DOES useEffect UPDATE totalListItems?
// IS THE h1 DISPLAYED, AND ARE InputBox, AND List MOUNTED?

