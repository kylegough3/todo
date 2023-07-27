import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { LiaEdit} from 'react-icons/lia'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleCategory(props) {
    const {currentUser} = useAuth()
    const [showEdit, setShowEdit] = useState(false);

    const deleteCat = (id) => {
      if(window.confirm(`Are you sure you want to delete ${props.category.catName}?`)) {
        axios.delete(`http://todoapi.goughkyle.com/api/ToDos/${id}`).then(() => {props.getCategories()})
      }
    }
  return (
    <tr>
        {/* This needs to match the casing of how the props is passed in AND the final property needs to match the DB dataset */}
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <td>
            <button className="fs-5 rouded" id="editLink" onClick={() => setShowEdit(true)}><LiaEdit/></button>
            <button className="fs-5 rouded" id="deleteLink" onClick={() => deleteCat(props.category.categoryId)}><MdDelete/></button>
          {showEdit &&
            <CatEdit
            category={props.category}
            getCategories={props.getCategories}
            showEdit={showEdit}
            setShowEdit={setShowEdit} 
            />}
          </td>
        }
    </tr>
  )
}
