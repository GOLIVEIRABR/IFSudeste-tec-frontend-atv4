import React from 'react';

import {
  ListItem,
  ListItemIcon,
  Checkbox,
  TextField,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles

} from '@material-ui/core';

import Cancel from '@material-ui/icons/Cancel';

const useStyles = makeStyles(() => ({
  textBackgroud: {
    background: '#acd8fa',
  },
}));

export default function ToDoItem({
  item, 
  index, 
  handleClickSelectElement, 
  handleCheck, 
  handleRemove, 
  handleEdit,
  handleInputEditItem,
  handleInputReturnKeyEdit,
  inputEditItem,

  }) {
  
  const classes = useStyles();

  const checkDescription = (description)=> {
    if(description.includes("estudar") || description.includes("ler")){
      return true;
    }else{
      return false;
    }
  }

  return (
    <ListItem button onClick={()=>{handleClickSelectElement(index)}} className={'MuiListItem-secondaryAction'}>
      <ListItemIcon>
        <Checkbox
          title={"Clique para marcar"}
          checked={item.checked}
          onClick={(event)=>{handleCheck(event, index)}}
        />
      </ListItemIcon>
      

      {item.clicked ? (
        <>
        <TextField
          autoFocus
          fullWidth
          value = {inputEditItem}
          onBlur={()=>{handleEdit(index)}}
          onChange={(event)=>{handleInputEditItem(event)}}
          onKeyUp={(event)=>{handleInputReturnKeyEdit(event, index)}}
        />        
        <ListItemSecondaryAction>
          <IconButton onMouseDown={()=>{handleRemove(index)}} title="Clique para apagar">
            <Cancel />
          </IconButton>
        </ListItemSecondaryAction>
      </>        
      ) : (
        <ListItemText primary={item.description} className={checkDescription(item.description)?classes.textBackgroud:''} />
      )}
    </ListItem>
  )
}
