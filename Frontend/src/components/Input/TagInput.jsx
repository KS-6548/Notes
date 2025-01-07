import React, { useState } from 'react'
import { IoMdAdd, IoMdClose } from "react-icons/io";

function TagInput({ tags, setTags }) {
    const [inputTags, setInputTags] = useState("")

    const handleInputChange = (e) =>{
        setInputTags(e.target.value)
    }

    const addNewTags = () => {
        if (inputTags.trim() !== "") {
            setTags([...tags, inputTags.trim()])
            setInputTags(" ")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTags()
        }
    }

    const handleRemoveTags = (removetag) => {
        setTags(tags.filter((tag) => tag !== removetag))
    }

    return (
        <>
            {tags?.length > 0 && <div className=''>
                {tags.map((tags, index) => (
                    <span key={index} className='bg-body-secondary me-2 p-2 rounded'>
                        #{tags}
                        <button className='btn mb-2 ms-2 h-25' onClick={() => { handleRemoveTags(tags) }}>
                            <IoMdClose />
                        </button>
                    </span>
                ))}
            </div>}

            <div className='d-flex'>
                <input
                    type="text"
                    className='form-control mb-3 w-25'
                    value={inputTags}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className='btn btn-outline-primary fs-4 ms-3 d-flex h-25'
                    onClick={() => { addNewTags() }}>
                    <IoMdAdd />
                </button>
            </div>
        </>
    )
}

export default TagInput