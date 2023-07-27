import React, {useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'

import { LiaEdit} from 'react-icons/lia'
import {MdDelete} from 'react-icons/md'
import ToDoEdit from './ToDoEdit';
import axios from 'axios';

export default function SingleToDo(props) {
    
    
    const [showEdit, setShowEdit] = useState(false);

    const {currentUser} = useAuth()

    const deleteToDo = (id) => {
        if(window.confirm(`Are you sure you want to delete ${props.toDo.name}`)) {
            axios.delete(`https://todoapi.goughkyle.com/api/ToDos/${props.toDo.toDoId}`).then(() => {props.getToDos()})
        }
    }

  return (
    <tr>
        <td className='checkbox' type='checkbox'>Checkbox</td>
        <td>{props.toDo.name}</td>
        <td>{props.toDo.category.catName}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <td className="text-center">
                <button className="fs-6 rounded" id="editLink" onClick={() => setShowEdit(true)}>
                    <LiaEdit/>
                </button>
                <button className="fs-6 rounded" id="deleteLink" onClick={() => deleteToDo(props.toDo.toDoId)}>
                    <MdDelete/>
                </button>
                {showEdit &&
                    <ToDoEdit
                    toDo={props.toDo}
                    getToDos={props.getToDos}
                    showEdit={showEdit}
                    setShowEdit={setShowEdit} />
                }
            </td>
        }
    </tr>
  )
}
