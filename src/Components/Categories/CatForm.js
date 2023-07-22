import React from 'react'
import {Formik, Form, Field} from 'formik'
import {catSchema} from '../../utilities/validationSchema'
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
    <div className="createCategory m-2 text-white text-center">
        <Formik
        initialValues={{
            catName: props.category ? props.category.catName : '',
            catDesc: props.category ? props.category.catDesc : ''
        }}
        validationSchema={catSchema}
        onSubmit={(values) => handleSubmit(values)}>
            {(errors, touched) => (
            <Form id="catForm" className="row text-center m-auto">
                <div className="form-groupm-1 p-1">
                    <Field className="form-control" name='catName' placeholder='Category Name'/>
                    {errors.catName && touched.catName ? <div className='text-danger'>{errors.catName}</div> : null} 
                </div>
                <div className="form-groupm-1 p-1">
                    <Field className="form-control" name='catDesc' placeholder='Category Description'/>
                    {errors.catDesc && touched.catDesc ? <div className='text-danger'>{errors.catDesc}</div> : null} 
                </div>
                <div className="form-group m-1">
                    <button className="btn btn-success">Submit</button>
                </div>
            </Form>
            )}
        </Formik>
    </div>
  )
}
