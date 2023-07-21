import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

export default function SingleCategory(props) {
    const {currentUser} = useAuth()
  return (
    <tr>
        {/* This needs to match the casing of how the props is passed in AND the final property needs to match the DB dataset */}
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
    </tr>
  )
}
