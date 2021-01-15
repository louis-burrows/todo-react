import React from "react";
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
      <section 
        className={styles.itemContainer}
      >
        <p className={styles[completedStyle]}>
          {content}
        </p>

        <div className={styles.buttonSection}>
          <Button 
            className={styles.buttonDelete} 
            text="Delete" 
            handleClick={() => deleteEntry(index)} 
          />
          <Button 
            className={styles.buttonToggle} 
            text="Mark as Done" 
            handleClick={() => toggleCompleted(index, isCompleted)} 
          />
        </div>
        
      </section>
    </>
    
  );
};

export default Item;
