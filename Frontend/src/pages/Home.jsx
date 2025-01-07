import React, { useState } from 'react'
import Notecard from '../components/Cards/Notecard'
import { IoMdAdd } from "react-icons/io"
import Popcard from '../components/Cards/Popcard'
import Modal  from 'react-modal'

function Home() {
  const [openpopmodel, setOpenPopModel] = useState({
    isShown: false,
    type : "add",
    data : null
  })
  return (
    <>
    <div className="row">
      <Notecard/>
    </div>
      <a type='button' className='btn btn-primary fs-2 rounded-4 d-flex p-3 position-absolute end-0 bottom-0 m-4 text-center'
        onClick={()=>{
          setOpenPopModel({isShown: true, type: "add", data: null})
        }}
      ><IoMdAdd/></a>
      
      <Modal 
        isOpen ={openpopmodel.isShown}
        onRequestClose = {()=>{}}
        style = {{
          overlay:{
            backgroundColor: "rgba(0,0,0,0.2)"
          },
        }}
        contentLabel=""
        className="model mx-auto mt-5 rounded-3 bg-light border-0 p-3 overflow-y-auto"
      >
        <Popcard onClose={()=>{setOpenPopModel({isShown:false, type: "add", data:null})}} noteData={openpopmodel.data} type={openpopmodel.type} />
      </Modal>
    </>
  )
}

export default Home