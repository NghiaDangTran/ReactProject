import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ data1, index, deleteAt, editAt }) => {

  return <article className='grocery-item'>
    <p className="title">{data1}</p>
    <div className='btn-container'>
      <button className='edit-btn' onClick={() => { editAt(index) }}>
        <FaEdit></FaEdit>
      </button>
      <button className='delete-btn' onClick={() => { deleteAt(index) }} >
        <FaTrash></FaTrash>
      </button>
    </div>
  </article>
}

export default List
