import React from 'react';
import styles from './Button.module.scss';


const Button = (props) => {
  
  const {text} = props;

  return ( 

    <>
      <button className={styles.standardButton} onClick={props.handleClick}>{text}</button>
    </>

  );
}
 
export default Button;