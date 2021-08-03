import Item from "./components/Item"
import React from 'react'
import AddItem from "./components/AddItem"
import { useSelector, useDispatch } from 'react-redux';
import { setEditText } from './redux/actions/edit';

const App = () => {

  // start redux dispatch // 
  const dispatch = useDispatch();
  const getOnClickData = (data) => {
    dispatch(setEditText(data));
  }
  // end redux dispatch // 

  // start get data from redux from "useSelector"
  const { edit } = useSelector((state) => state.edit);
  console.log(edit);
  // send get data from redux from "useSelector"


  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'To buy bread' },
    { id: 2, completed: true, title: 'To buy oil' },
    { id: 3, completed: false, title: 'To buy laptop' }
  ])

  const getData = (data) => {
    setTodos(todos.concat([{
      id: todos.length + 1,
      completed: false,
      title: data
    }]))
  }

  const getEdit = (data, id) => {
    let newArr = []
    todos.map(element => {
      if (element.id === id) {
        element.title = data
      }
      newArr.push(element)
    })
    setTodos(newArr)
    getOnClickData(data)
  }

  const getRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='container'>
      {todos.map(item => (
        <Item key={item.id + item.title} value={item.title} id={item.id} getRemove={getRemove} getEdit={getEdit} />
      ))}
      <AddItem getData={getData} />
    </div>
  );
}

export default App;
