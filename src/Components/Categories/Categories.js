import React, {useState, useEffect} from 'react'
import './Categories.css'

import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import { useAuth } from '../../contexts/AuthContext'

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    //Pull the ToDos from the API, log the results in the console, set the ToDos
    axios.get(`https://localhost:7248/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
}, []);

  return (
    <section className="categories">
      <article className="bg-blue p-4-mb-4">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      <Container className='pt-4'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(c =>
              <SingleCategory key={c.categoryId} category={c} getCategories={getCategories}/>)}
          </tbody>
        </Table>
      </Container>
    </section>
  )
}
