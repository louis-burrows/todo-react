import React, { useState } from 'react';
import styles from './App.module.scss';

import List from "./Containers/List";
import InputBox from "./Components/InputBox"

const App = () => {

  const [totalListItems, updateList] = useState([]);

  console.log(totalListItems);
  

  return ( 

    <>
      <section className={styles.appContainer}>

        <h1 className={styles.title}>Make a To-Do List with React</h1>

        <section className={styles.listContainer}>
          <InputBox updateList={updateList} totalListItems={totalListItems} maxIdCount={totalListItems.slice(-1).id}/>
          <List listOfItems={totalListItems} updateList={updateList}/>
        </section>

      </section>
    </>
  );
}
 
export default App;


