import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { IoMdClose } from "react-icons/io"

function SearchBar({value, onChange, removeSearch}) {
    return (
        <>
            <div className="container w-75 d-flex justify-content-center">
                <form className="d-flex w-50 position-relative top-0" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={value} onChange={onChange} />
                    {value && <a className=" closes btn position-absolute" onClick={removeSearch}><IoMdClose/></a>}
                    <button className="btn position-absolute end-0" type="submit"><FaSearch/></button>
                </form>
            </div>
        
        </>

    )
}

export default SearchBar