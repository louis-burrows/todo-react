import React from 'react';
import styles from './List.module.scss';
import Item from "../../Components/Item";


const List = (props) => {
  
 

  const {updateList, listOfItems} = props;
  
    
  const deleteEntry = (index) => {
    const editedListOfItems = [...listOfItems];
    editedListOfItems.splice(index, 1);
    updateList(editedListOfItems);
  }

  const toggleCompleted = (index, isCompleted) => {
    const editedListOfItems = [...listOfItems];
    editedListOfItems[index].isCompleted = !isCompleted;
    updateList(editedListOfItems);
  }

 


  return ( 

    <>

      {props.listOfItems.map((item, index) => {
        
        return (
          <> 
            <Item key={item.id} toggleCompleted={toggleCompleted} content={item.toDo} isCompleted={item.isCompleted} index={index} deleteEntry={deleteEntry}/>
          
          </>
        )
      })}
     
    </>

  );
}
 
export default List;