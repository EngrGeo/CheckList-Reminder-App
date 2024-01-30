import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const CheckList =({text, updateMode, deleteChecklist}) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>

      <div className="icons">
        <BiEdit className='icon' onClick = {updateMode} />
        <AiFillDelete className='icon' onClick = {deleteChecklist} />
      </div>
    </div>
  )
}

export default CheckList