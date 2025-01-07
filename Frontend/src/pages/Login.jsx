import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Password from '../components/Input/Password.jsx'
import { isValid } from '../Utils/Helper.js'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const history = useNavigate()

    const handdlevalidate = async (e) => {
        e.preventDefault();

        if (!isValid(email)) {
            setError("Please enter a valid email id")
            return;
        }

        if (!password) {
            setError("Please enter a password")
            return;
        }

        setError("")
    }

    const handleLogin = async () => {
        try {
            if(!email || !password){
                setError("Please enter both username and password.")
                return
            }

            const response = await axios.post("http://localhost:8081/auth/signin", {email,password})
            console.log("Login sucessful:", response.data);
            history("/Home")

        } catch (e) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    }

    return (
        <>
            <div className="container flex-column login" >
                <div className="container d-flex justify-content-center flex-column rounded shadow p-3" >
                    <form onSubmit={handdlevalidate}>
                        <h3 className='pb-3 pt-3 fw-bold'>Login</h3>

                            <input type="text"
                                className="form-control mb-3 "
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        <Password value={password} onChange={(e) => setPassword(e.target.value)} />

                        {error && <p className='text-danger'>{error}</p>}

                        <button type='submit'
                            className='btn btn-primary mb-3 fs-5 w-100'
                            onClick={handleLogin}>
                            Login
                        </button>

                        <p className='text-center'>Not registered yet? <Link to={"/SignUp"}
                            className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                            Create an Account
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login