import React, {useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'

export default function SingleToDo(props) {
    
    
    const [showEdit, setShowEdit] = useState(false);

    const {currentUser} = useAuth()

  return (
    <tr>
        <td>{props.todo.Name}</td>
        <td>{props.category.CatName}</td>
    </tr>
  )
}
