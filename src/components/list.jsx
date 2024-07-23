import { Button } from 'react-bootstrap'
import React from 'react'


const List = ({ data, onDelete , onComplete, onDeleteAll}) => {
    return (
        <div className='mt-2 container bg-warning h-100 p-3 position-relative '>
            <p className=" flex-end text-dark h6 mx-auto d-block position-absolute end-0 px-1"> number of Needs : {data.length} </p>
            {data && data.map(el => (
                <div key={el.id} className="p-2 bg-light shadow w-75 mx-auto my-4 d-flex justify-content-evenly">
                    <div className={el.completed === true ? 'text-decoration-line-through' : 'text-decoration-none'} > {el.item} </div>
                    <div className="controls">
                        <Button type='button' variant='danger mx-2' onClick={()=> onDelete(el)} >Delete</Button>
                        <Button type='button' variant='success'  onClick={()=> onComplete(el) } > {el.completed === true ? 'Undo' : 'Completed'} </Button>
                    </div>
                </div>
            ))}
            {data.length === 0 ?
                <div className='text-center text-danger'>No Needs</div> : 
                <Button type='button' variant='danger' className='w-25 m-auto d-block' onClick={onDeleteAll}>Delete All</Button>
            }

        </div>
    )
}

export default List
