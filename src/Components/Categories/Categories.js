import React, {useState, useEffect} from 'react'
import './Categories.css'

import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const {currentUser} = useAuth()
  const [showCreate, setShowCreate] = useState(false);

  const getCategories = () => {
    //Pull the ToDos from the API, log the results in the console, set the Categories
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
      <article className="bg-blue p-4-mb-4 text-light">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
      <div>
        {showCreate ? 
        <>
          <button onClick={() => setShowCreate(false)} className="btn btn-danger">Cancel</button>
          <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
        </> :
          <button onClick={() => setShowCreate(true)} className='btn btn-success p-3'>Create Category</button>}
      </div>
    }

      <Container className='pt-4'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Description</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Actions</th>
              }
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
