import React, {useState} from "react";
import Button from "../Button";
import styles from "./Item.module.scss";

const Item = (props) => {

  const {
    content, 
    deleteEntry, 
    index, 
    isCompleted, 
    toggleCompleted} = props;

  const completedStyle = isCompleted ? "isCompleted" : "notCompleted";

  return (
    <>
      <p className={styles[completedStyle]}>{content}</p>
      <Button text="Delete" handleClick={() => deleteEntry(index)} />
      <Button text="Complete" handleClick={() => toggleCompleted(index, isCompleted)}/>
    </>
  );
};

export default Item;
