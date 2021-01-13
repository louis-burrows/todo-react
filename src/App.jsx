import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

import List from "./Containers/List";

import InputBox from "./Components/InputBox"



const App = () => {

  
  
  const [totalListItems, updateList] = useState([]);

  

  return ( 

    
    <>

      <InputBox updateList={updateList} totalListItems={totalListItems} maxIdCount={totalListItems.slice(-1).id}/>

      <List listOfItems={totalListItems} updateList={updateList}/>

    </>
 
  );
}
 
export default App;


