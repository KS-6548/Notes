import React, { useState, createContext } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Password from '../components/Input/Password.jsx'
import axios from 'axios'
import { isValid } from '../Utils/Helper.js'

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("ROLE_CUSTOMER");
    const [mobile, setMobileNumber] = useState("");
    const [error, setError] = useState(null)
    const [ispassword, setIsPassword] = useState(false);
    const history = useNavigate()

    const togglepassword = ()=>{
        setIsPassword(!ispassword);
    }

    const handdlevalidate = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Please enter a Name")
            return;
        }

        if (!isValid(email)) {
            setError("Please enter a valid email id")
            return;
        }

        if (!password) {
            setError("Please enter a password")
            return;
        }
        if (!confirmPassword) {
            setError("Please enter a confirm password")
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!mobile) {
            setError("Please enter a mobile number")
            return;
        }
        if (!role) {
            setError("Please enter a role")
            return;
        }
        

        setError("")
    }

    const handleSignup = async () => {
        try {

            const response = await axios.post('http://localhost:8081/auth/signup', {
                name,
                email,
                password,
                role,
                mobile
            });
            // Handle successful signup
            console.log(response.data);
            history('/Home');
        } catch (e) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            // setError(error.response ? error.response.data : error.message);
            // return
        }
    }

    return (
        <>
            <div className="container flex-column login" >
                <div className="container d-flex justify-content-center flex-column rounded shadow">
                    <form onSubmit={handdlevalidate}>

                        <h3 className='pb-3 pt-3 fw-bold'>SignUp</h3>

                        <input type="text"
                            className="form-control mb-3"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <input type="text"
                            className="form-control mb-3"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <Password value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className="input-group mb-3 border rounded">

                            <input type={ispassword ? "text" : "password"}
                                className="form-control border-0 "
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)} />

                            {ispassword ?
                                <a type='button'
                                    className='btn text-primary'
                                    onClick={() => togglepassword()}>
                                    <FaRegEye />
                                </a>
                                :
                                <a type='button'
                                    className='btn text-primary'
                                    onClick={() => togglepassword()}>
                                    <FaRegEyeSlash />
                                </a>
                            }
                        </div>

                        <input type="text"
                            className="form-control mb-3"
                            placeholder='Mobile'
                            value={mobile}
                            onChange={(e) => setMobileNumber(e.target.value)} />

                        <label className='form-label'>Role:</label>
                        <select className="form-select mb-3" aria-label="Default select example" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="ROLE_CUSTOMER">User</option>
                            <option value="ROLE_ADMIN">Admin</option>
                        </select>

                        {error && <p className='text-danger'>{error}</p>}

                        <button
                            type='submit'
                            className='btn btn-primary mb-3 fs-5 w-100'
                            onClick={handleSignup}
                        >Create Account
                        </button>
                        <p className='text-center'>Already have an account? <Link to={"/"}
                            className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                            Login
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp