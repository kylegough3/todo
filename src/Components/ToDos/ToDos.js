import React, {useState, useEffect} from 'react'
import './ToDos.css'

import { Container, Table } from 'react-bootstrap'
import SingleToDo from './SingleToDo'

import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function ToDos() {
  const [toDos, setToDos] = useState([]);

  //For create functionality, destructure currentUser from UseAuth() and a hook for showCreateForm
  const{currentUser} = useAuth()

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
    <section className="todo">
      <article className="p-4">
        <h1 className="text-center">ToDo Disaster Dashboard</h1>
      </article>

      <Container className='pt-4'>
        <Table className='striped' variant='dark'>
          <thead>
            <tr>
              <th>Done?</th>
              <th>To Do</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map(t =>
              <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />)}
          </tbody>
        </Table>
      </Container>
    </section>
  )
}
