import React, {useState, useEffect} from 'react'
import './ToDos.css'

import { Container } from 'react-bootstrap'
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

  return (
    <section className="todo">
      <article className="p-5">
        <h1 className="text-center">ToDo Disaster Dashboard</h1>
      </article>

      <Container>
        <article className="toDoGallery row justify-content-center">
          {toDos.map(t => <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos}/>)}
        </article>
      </Container>
    </section>
  )
}
