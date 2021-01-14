import React, { useState, useEffect } from "react";
import styles from "./InputBox.module.scss";

const InputBox = (props) => {

  const { maxIdCount } = props;

  const [currentInput, captureInput] = useState("");
  const [idForItem, updateID] = useState(1);

  useEffect(() => {
    return maxIdCount ? updateID(maxIdCount+1) : "";
  }, [])

  const createItem = () => {
    props.updateList([
      ...props.totalListItems, 
      { toDo: currentInput, 
        isCompleted: false, 
        id: idForItem }
    ]);
    updateID(idForItem + 1);
  }

  return (
    <>
        <label className={styles.labelForInput} htmlFor="addToList">
          Type a list entry: 
        </label>
        
        <input 
          className={styles.inputBar}
          type="text" 
          name="addToList" 
          id="addToList" 
          onInput={e => captureInput(e.target.value)} />

        <button className={styles.submitButton} onClick={() => createItem()}> 
          Add Entry
        </button>
    </>
  );
};

export default InputBox;
