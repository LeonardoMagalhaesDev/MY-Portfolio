import React from 'react'
import './HabilidadePopaup.css'
function MainPopaup (props) {
  return (props.trigger) ? (
    <div className='MainPopaup'>
        <div className='MainPopaup-inner'>
            <button className='close-btn' onClick={()=> props.setTrigger(false)}><i class="bi bi-x-circle-fill"></i></button>
            
            { props.children }
        </div>
    </div>
  ):"";
}

export default MainPopaup
