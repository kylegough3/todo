import React, {useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'

export default function SingleToDo(props) {
    
    
    const [showEdit, setShowEdit] = useState(false);

    const {currentUser} = useAuth()

  return (
    <tr>
        <td className='checkbox' type='checkbox'>Checkbox</td>
        <td>{props.toDo.name}</td>
        <td>{props.toDo.category.catName}</td>
    </tr>
  )
}
