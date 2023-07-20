import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'

export default function Navigation() {
  const {currentUser} = useAuth()

  return (
    <Navbar expand='md' bg='dark' variant='dark' className='p-3' sticky='top'>
        <Navbar.Brand href='/'>ToDo App</Navbar.Brand>
        {currentUser && <Logout/>}
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {currentUser && <>
                <Link to='/ToDos' className='nav-link'>ToDos</Link>
                <Link to='/Categories' className='nav-link'>Categories</Link>
              </>}
                
                {!currentUser &&
                <Link to='/Login' className='nav-link'>Login</Link>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
