import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'


function Password({value, onChange}) {
    const [ispassword, setIsPassword] = useState(false);

    const togglepassword = ()=>{
        setIsPassword(!ispassword);
    }

    return (
        <>
            <div className="input-group mb-3 border rounded">
               
                <input type={ispassword? "text": "password"} 
                className="form-control border-0 " 
                placeholder="Password" 
                value={value} 
                onChange={onChange} />
                
                {ispassword ? 
                    <a type='button' 
                    className='btn text-primary'
                    onClick={()=>togglepassword()}>
                        <FaRegEye/>
                    </a>
                    :
                    <a type='button' 
                    className='btn text-primary'
                    onClick={()=>togglepassword()}>
                        <FaRegEyeSlash />
                    </a>
                }
            </div>
            
        </>
    )
}

export default Password