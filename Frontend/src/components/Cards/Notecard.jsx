import React from 'react'
import { LuPin, LuPinOff } from "react-icons/lu"
import { BiSolidPencil } from "react-icons/bi"
import { FaTrash } from "react-icons/fa"

function Notecard({onPinNote, onEdit, onDelete }) {
    const d1 = [
        {
            id:"1",
            title:"Card title",
            date:"14th Aug 2024",
            desc:"With supporting text below as a natural lead-in to additional content.",
        },
        {
            id:"2",
            title:"Card title",
            date:"14th Aug 2024",
            desc:"With supporting text below as a natural lead-in to additional content.",
        },
        {
            id:"3",
            title:"Card title",
            date:"14th Aug 2024",
            desc:"With supporting text below as a natural lead-in to additional content.",
        },
        {
            id:"4",
            title:"Card title",
            date:"14th Aug 2024",
            desc:"With supporting text below as a natural lead-in to additional content.",
        },
    ]
    return (
        <>
        {
            d1.map((todo)=>(
                <div className="col-12 col-md-6 col-lg-4 g-3"  key={todo.id}>
                    <div className="card shadow ms-3 me-3">
                        <div className="card-body postion-absolute">
                            <a className='btn pin text-body-tertiary position-absolute end-0'><LuPin /></a>
                            <h5 className="card-title fw-bold">{todo.title}</h5>
                            <span className='card-text'>{todo.date}</span>
                            <p className="card-text text-truncate">{todo.desc}</p>
                            <span className='text-body-tertiary'>#tags</span>
                            <a className='btn pencil text-body-tertiary position-absolute end-0 me-5'><BiSolidPencil /></a>
                            <a className='btn tash text-body-tertiary position-absolute end-0'><FaTrash /></a>

                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Notecard