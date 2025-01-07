import React, {useContext} from 'react'
import { getInitial } from '../Utils/Helper'

function Profile({onLogout}) {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center p-2'>
            <div className='p-3 me-3 rounded-pill bg-body-secondary'>
                <div className='fs-5 fw-bold'>{getInitial("Karthik Sundaram")}</div>
            </div>
            <div className='text-center'>
                <p className='m-0'>Karthik</p>
                <a className='btn' onClick={onLogout}>Logout</a>
            </div>
        </div>
    </>
  )
}

export default Profile