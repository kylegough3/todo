import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function SingleCategory(props) {
    const {currentUser} = useAuth()
  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDescription}</td>
    </tr>
  )
}
