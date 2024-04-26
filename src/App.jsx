import { useState } from 'react'
import './App.css'

function App() {
 const [newTodo, setNewTodo] = useState({
  name: '',
  age: ''
 })
 const [todo, setTodo] = useState([])
 const [editIndex, setEditIndex] = useState(null);
 
const handleChange = (e) => {
  const {name, value} = e.target;
  setNewTodo({...newTodo, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (editIndex !== null) {
    const updatedTodo = [...todo];
    console.log(updatedTodo)
    updatedTodo[editIndex] = newTodo;
    setTodo(updatedTodo);
    setEditIndex(null);
  } else {
    setTodo([...todo, newTodo])
  }
  setNewTodo({name: '', age: ''})
}

const handleDelete = (index) => {
  const updatedTodo = [...todo];
  updatedTodo.splice(index, 1);
  setTodo(updatedTodo);
}

const handleEdit = (index) => {
  const editedItem = todo[index];
  setNewTodo({name: editedItem.name, age: editedItem.age});
  setEditIndex(index);
}

  return (
    <>
     <div>
          
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' name='name' placeholder='name' value={newTodo.name} onChange={handleChange} />
          </div>

          <div>
            <input type='text' name='age' placeholder='age' value={newTodo.age} onChange={handleChange} />
          </div>
          <button type='submit'>{editIndex !== null ? 'Update' : 'Add Data'}</button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
     </div>
    </>
  )
}

export default App
