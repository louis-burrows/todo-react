import React from "react";
import { mount } from "enzyme";
import List from "./List";

describe("List tests", () => {

  let testComponent;
  const mockList = [
    {
      "toDo":"todo1",
      "isCompleted":false,
      "id":1
    },
    {
      "toDo":"todo2",
      "isCompleted":false,
      "id":2
    },
    {
      "toDo":"todo3",
      "isCompleted":false,
      "id":3
    }
  ]

  beforeEach(() => {
    testComponent = mount(<List listOfItems={mockList}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(testComponent).toMatchSnapshot();
  });

  it("should contain three Item components, using the mock array", () => {
    expect(testComponent.find(".itemContainer").length).toEqual(3);
  });

});



//  FURTHER TESTS TO WRITE

//**DONE**
//  ARE ALL THE TO-DO COMPONENTS FROM listOfItems BEING MAPPED ON THE List COMPONENT?
//  Enter an array of objects into the property listOfItems?
//  How many instances are mapped onto the page?
//  Do the numbers of instances and objects within the array correspond?


//  ARE ALL THE TO-DOs OF DIFFERENT ID'S?
//  Feed into the component an array with all the props required to generate a list of instances.
//  Does each instance have an id that is unique?


//  WHEN toggleCompleted IS CALLED, DOES THE STATE CHANGE ON THE OBJECT FOR WHICH IT IS CALLED?
//  The state of isCompleted on any given object within the array should be either true or false.
//  Call the function toggleCompleted.
//  The state of isCompleted on any given object within the array should be the opposite of it's original status.
//  Call the function toggleCompleted.
//  The state of isCompleted on any given object within the array should revert to it's original state.


//  WHEN AN ITEM COMPONENT IS DELETED, DOES THE UPDATED LIST CORRESPOND TO A LIST MINUS THE DELETED COMPONENT?
//  Instance of component Item A should exist within the list of mapped to-dos, along with being registered within the listOfItems.
//  Call the function deleteEntry on instance Item A.
//  The instance of Item A should no longer exist within the mapped Items nor within the listOfItems. 


