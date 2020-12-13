import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import AddCircle from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

export default function InputText({inputItem, handleInputItem, handleReturnKeyAdd, addElement }) {

  return (
    <div>
       <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="inputText">Add an Item</InputLabel>
            <Input
              id="inputText"
              value= {inputItem}
              type='text'            
              onChange={handleInputItem}
              onKeyUp={handleReturnKeyAdd}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    disabled={inputItem.length===0?true:false}
                    aria-label="Adicionar Item"
                    onClick={()=>{addElement(inputItem)}}
                  >
                    <AddCircle/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
    </div>
  )
}
