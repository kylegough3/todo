import React from 'react'
import { Modal } from 'react-bootstrap'
import ToDoForm from './ToDoForm'

export default function ToDoEdit(props) {
  return (
    <Modal show={props.showEdit} onHide={() => props.setShowEdit(false)}>
        <Modal.Header className='bg-green' closeButton>
            <h3>Editing {props.toDo.name}</h3>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm getToDos={props.getToDos} setShowEdit={props.setShowEdit} toDo={props.toDo} />
        </Modal.Body>
    </Modal>
  )
}
