import React, { useState, useEffect } from "react";
import List from "../../Containers/List";
import styles from "./InputBox.module.scss";

const InputBox = (props) => {

  const { maxIdCount } = props;

  const [currentInput, captureInput] = useState("");

  
  const [idForItem, updateID] = useState(1);

  useEffect(() => {
    maxIdCount ? updateID(maxIdCount+1) : "";
  }, [])


  const createItem = () => {
    props.updateList([
      ...props.totalListItems, 
      {toDo: currentInput, 
        isCompleted: false, 
        id: idForItem}
    ]);
    updateID(idForItem + 1);
  }

  return (
    <>
        <label htmlFor="addToList">
          Type a list entry: 
        </label>
        
        <input 
          type="text" 
          name="addToList" 
          id="addToList" 
          onInput={e => captureInput(e.target.value)} />

        <button onClick={() => createItem()}> 
          Add Entry
        </button>
    </>
  );
};

export default InputBox;
