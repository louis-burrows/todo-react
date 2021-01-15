import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';

import InputBox from "./Components/InputBox";
import List from "./Containers/List";

const App = () => {

  const [totalListItems, updateList] 
    = useState(JSON.parse(localStorage.getItem("localStorageList")) || []);

  useEffect(() => {
    localStorage.setItem("localStorageList", JSON.stringify(totalListItems))
  }, [totalListItems]);

  const maxIdCount = () => {
    if (totalListItems.length > 0) {
      return totalListItems.slice(-1)[0].id;
    }
    return "";
  };

  return ( 

    <>
      <section className={styles.appContainer}>

        <h1 className={styles.title}>
          Make a To-Do List with React
        </h1>

        <div className={styles.listContainer}>
          <InputBox 
            updateList={updateList} 
            totalListItems={totalListItems} 
            maxIdCount={maxIdCount()} />
          <List 
            listOfItems={totalListItems} 
            updateList={updateList} />
        </div>

      </section>
    </>

  );
};
 
export default App;


