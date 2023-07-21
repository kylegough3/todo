//File houses schema for create/edit forms
import * as Yup from 'yup'

const toDoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 characters'),
    categoryId: Yup.number()
})

const catSchema = Yup.object().shape({
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    categoryDescription: Yup.string().max(100, 'Max 100 characters')
})

export {catSchema, toDoSchema}