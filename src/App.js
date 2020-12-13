import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputText from './components/InputText';
import ToDoList from './components/ToDoList';


const useStyles = makeStyles(() => ({
  appbar: {
    background: '#2196f3',
  },
  container: {
    margin: '35px 4%',
  }
}));

function App() {
  const [inputItem, setInputItem] = useState('');
  const [inputEditItem, setInputEditItem] = useState('');
  const [list, setList] = useState([]);

  const classes = useStyles();

  const handleInputItem = (event)=>{
    setInputItem(event.target.value)
  }

  const handleInputEditItem = (event)=>{
    setInputEditItem(event.target.value)
  }

  const handleInputReturnKeyAdd = (event)=>{
    if(event.keyCode===13){
      addItem()  
    } 
  }

  const handleInputReturnKeyEdit = (event, index)=>{
    if(event.keyCode===13){
      editElement(index);  
    } 
  }

  const addItem = () => {
    if(inputItem.trim().length<=0){
      return;
    }
    const listBuffer = [...list];
    let description = inputItem;
    let newElement = {
      description: description,
      clicked: false,
      checked: false,
    }
    listBuffer.push(newElement);
    setList(listBuffer);
    setInputItem('');
  }


  const toggleCheckElement = (event, index)=>{
    const listBuffer = [...list];
    if(listBuffer[index].checked===true){
      listBuffer[index].checked = false;
    }else{
      listBuffer[index].checked =true;
    }
    setList(listBuffer);
    event.stopPropagation();
  }

  const selectElement = (index) => {
    const listBuffer = [...list];
    listBuffer.forEach(element => {
      element.clicked = false;
    });
    listBuffer[index].clicked = true;
    setInputEditItem(listBuffer[index].description);
    setList(listBuffer);
  }

  const removeElement = (index) => {
    let listBuffer = [...list];
    listBuffer.splice(index, 1);
    listBuffer.forEach(element => {
      element.clicked = false;
    });
    setList(listBuffer);
  }

  const editElement = (index) => {
    const listBuffer = [...list];
    listBuffer[index].description = inputEditItem;
    listBuffer.forEach(element => {
      element.clicked = false;
    });
    setList(listBuffer);
    setInputEditItem('');
  }

  return (
    <div>
      <AppBar position="static" classes={{colorPrimary:classes.appbar}} color="primary" >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <InputText 
          handleInputItem = {handleInputItem}
          handleReturnKeyAdd = {handleInputReturnKeyAdd}
          addElement = {addItem}
          inputItem= {inputItem}      
        />

        <ToDoList 
          itemList={list}
          handleClickSelectElement={selectElement}
          handleCheck={toggleCheckElement}
          handleRemove={removeElement}   
          handleEdit = {editElement}  
          handleInputEditItem = {handleInputEditItem}
          handleInputReturnKeyEdit = {handleInputReturnKeyEdit} 
          inputEditItem = {inputEditItem}
        />
        </div>
    </div>
  );
}

export default App;
