import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { InputGroup } from 'react-bootstrap'

const MyForm = ({handleAddList}) => {
    const [value, setValue] = useState(null)
    const [isCompleted, setIsCompleted] = useState(false)
    const [list, setList] = useState([])
    const [validated, setValidated] = useState(false)

    const addItem = () => {
        if (value) { 
            setList([ ...list , {
                item: value,
                id:Math.floor( Math.random()*1000),
                completed : isCompleted
            }])
        }
        handleAddList(list)

        document.querySelector("input").value = ''
    }

    const handleSubmit = (event) => {
        const form = event.target
        console.log(form)
        if (form.checkValidity() === false) { 
            console.log("false")
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)
    }
    console.log(list)
    return (
        <div className='m-auto p-3 shadow' >
            <h3 className='text-center text-warning mb-5'>list your bag </h3>
            <Form validated={validated} onSubmit={handleSubmit}>
                <InputGroup className='w-75 m-auto'>
                    <InputGroup.Text id='item'  >Add Task</InputGroup.Text>
                    <Form.Control required aria-describedby='item' aria-label='item' onChange={(e) => setValue(e.target.value)} />
                    <Form.Control.Feedback>Every thing is good</Form.Control.Feedback>
                </InputGroup>
                <Button variant='warning' className='mx-auto my-3 d-block w-25' onClick={addItem}>Add</Button>
            </Form>
        </div>
    )
}

export default MyForm
