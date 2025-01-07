import React, { useState } from 'react'
import Profile from '../components/Profile'
import { FaSearch } from "react-icons/fa"
import SearchBar from '../components/SearchBar/SearchBar'
import {useNavigate} from 'react-router-dom'

function Navibar() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const removeSearch = () =>{
        setInput("")
    }

    const onLogout = ()=>{
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-sm fixed-top position-relative mb-3">
                <div className="container-fluid ">
                    <a className="navbar-brand fs-4 fw-bold" href="#">
                        Notes
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <SearchBar value={input} onChange={(e)=>setInput(e.target.value)} removeSearch={removeSearch}/>
                        <Profile onLogout={onLogout}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navibar