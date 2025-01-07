import React, { useState } from 'react'
import {IoMdClose } from 'react-icons/io'
import TagInput from '../Input/TagInput'

function Popcard({ onClose, noteData, type }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])
    const [error, setError] = useState(null)
    
    const editNotes = async () => {}
    
    const addNotes = async () => {}

    const  handleError = ()=>{
        if(!title){
            setError("Please enter the title")
            return;
        }
        if(!content){
            setError("Please enter the content")
            return;
        }
        setError("")
        if(type === "edit"){
            editNotes()
        }else{
            addNotes()
        }
    }


    return (
        <>
            <div className="d-flex flex-column gap-2 position-relative w-100 p-3">
                <button className='btn position-absolute end-0 fs-3 top-0 text-body-tertiary' onClick={onClose}>
                    <IoMdClose />
                </button>

                <label className='form-label text-body-tertiary'>TITLE</label>
                <input
                    type='text'
                    className='form-control mb-3 fw-bold fs-4'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <div className="d-flex flex-column g-2">
                    <label className='form-label text-body-tertiary'>CONTENT</label>
                    <textarea
                        className='form-control body-tertiary'
                        rows={6}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}>
                    </textarea>
                </div>
                <div className="mt-3">
                    <label className='form-label text-body-tertiary'>TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
                </div>
                
                {error && <p className='text-danger'>{error}</p>}

                <button className='btn btn-primary w-100 fs-5 fw-bold' onClick={handleError}>ADD</button>
            </div>
        </>
    )
}

export default Popcard