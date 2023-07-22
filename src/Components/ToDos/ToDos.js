import React, {useState, useEffect} from 'react'
import './ToDos.css'

import { Container, Table } from 'react-bootstrap'
import SingleToDo from './SingleToDo'

import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

import FilterCat from './FilterCat'
import ToDoCreate from './ToDoCreate'

export default function ToDos() {
  const [toDos, setToDos] = useState([]);

  //For create functionality, destructure currentUser from UseAuth() and a hook for showCreateForm
  const{currentUser} = useAuth()

  const [showCreate, setShowCreate] = useState();
  const [filter, setFilter] = useState(0);
  const [showDone, setShowDone] = useState(false);

  const getToDos = () => {
    //Pull the ToDos from the API, log the results in the console, set the ToDos
    axios.get(`https://localhost:7248/api/ToDos`).then(response => {
      console.log(response)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
    <section className="toDos">
      <article className="p-4">
        <h1 className="text-center text-light">ToDo Disaster Dashboard</h1>
      </article>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="p-2 mb-3 text-center">
          {!showCreate ?
            <button className='btn btn-success p-3 mb-3' onClick={() => setShowCreate(true)}>Create New Task</button> :
            <button className='btn btn-danger p-3 mb-3' onClick={() => setShowCreate(false)}>Close Create Form</button>}
          {showCreate &&
            <div className='createContainer w-75 m-auto'>
              <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />
            </div>
          }
        </div>
      }
      <FilterCat setFilter={setFilter} showDone={showDone} setShowDone={setShowDone}/>
      <Container className='pt-4'>
        <Table className='striped' variant='dark'>
          <thead>
            <tr>
              <th>Done?</th>
              <th>To Do</th>
              <th>Description</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
              <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {!showDone ?
            <>
              {filter === 0 ? toDos.filter(x => x.done === false).map(t =>
              <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />) :
              toDos.filter(x => x.done === false && x.categoryId === filter).map(t =>
                <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />)
              }
            </> :
            <>
              {filter === 0 ? 
              toDos.map(t =>
                <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />) :
              toDos.filter(x => x.categoryId === filter).map(t =>
                <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />)
              }
            </>
            } 
          </tbody>
        </Table>

      </Container>
    </section>
  )
}
