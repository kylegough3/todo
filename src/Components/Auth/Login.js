import React from 'react'
//Step1 - import useAuth from AuthContext
import { useAuth } from '../../contexts/AuthContext'
import {Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    //Step 2 - Destructure objects from useAuth and save in a hook
    const {login} = useAuth()
    const navigate = useNavigate()

    //Custom handler to log the user in and redirect to home
    async function handleAuth() {
        await login()
        //return to home view using useNavigate hook from react-router-dom
        return navigate('/')
    }
  
    return (
    // Create UI for Login function
    <div className="login">
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className="text-center">Welcome to Disaster Planning!</h1>
        </article>
        <Container className='m-2 border-dark text-center'>
            <Card.Header className='bg-dark text-white'>
                <h2>Log In for Functionality</h2>
            </Card.Header>
            <Card.Body>
                <button className="btn btn-success" onClick={() => handleAuth()}>Log In with Github</button>
            </Card.Body>
        </Container>
    </div>
  )
}
