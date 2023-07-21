import React from 'react'
import {Formik, Form, Field} from 'formik'
import {catschema} from '../../utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {
    const handleSubmit = (values) => {
        console.log(values)
        if(!props.category) {
            const catCreate= values

            axios.post(`https://localhost:7248/api/Categories`, catCreate).then(() => {
                props.setShowCreate(false)
                props.getCategories()
            })
        }
        else {
            const catEdit = {
                categoryId: props.category.categoryId,
                categoryName: values.categoryName,
                categoryDescription: values.categoryDescription
            }
            axios.put(`https://localhost:7248/api/Categories${props.category.categoryId}`, catEdit).then(() => {
                props.setShowEdit(false)
                props.getCategories()
            })
        }
    }
  
    return (
    <div>CatForm</div>
  )
}
