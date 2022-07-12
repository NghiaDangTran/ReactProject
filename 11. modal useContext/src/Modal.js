import React, { useContext } from 'react'
import { FaHourglassEnd, FaTimes } from 'react-icons/fa'
import { AppContext } from './context'
const Modal = () => {
  const { modal, setModal } = useContext(AppContext)
 
  return <div className={`modal-overlay ${modal && "show-modal"}`}>
    <div className="modal-container">

      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={()=>{setModal(false)}}>
        <FaTimes></FaTimes>
      </button>
    </div>

  </div>
}

export default Modal
