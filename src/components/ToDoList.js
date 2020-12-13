import React from 'react';
import {List} from '@material-ui/core';
import ToDoItem from './ToDoItem';

export default function ToDoList({
  itemList,
  handleClickSelectElement,
  handleCheck,
  handleRemove,
  handleEdit,
  handleInputEditItem,
  handleInputReturnKeyEdit,
  inputEditItem
}) 
{
  return (
   
    <List>
      {itemList.map((item, index) => (    
        <ToDoItem key = {index}
          item = {item}
          index = {index}
          handleClickSelectElement = {handleClickSelectElement}
          handleCheck = {handleCheck}
          handleRemove = {handleRemove}
          handleInputEditItem = {handleInputEditItem}
          handleInputReturnKeyEdit = {handleInputReturnKeyEdit}
          handleEdit = {handleEdit}
          inputEditItem = {inputEditItem}
        />        
      ))}
    </List>
  )
}
