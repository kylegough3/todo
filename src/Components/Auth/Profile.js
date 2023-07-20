import React from 'react'
import { useAuth } from '../../contexts/AuthContext'


export default function Profile() {
    const{currentUser} = useAuth()
  
    return (
    <span className="profile p-2">
        Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName}!
        <img src={currentUser.photoUrl} alt={currentUser.email}/>
    </span>
  )
}
