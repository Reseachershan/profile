import React from 'react'
import Number from '../assets/number.png'

function Contact() {
  return (
    <div className='container'>
      <h2>Contact</h2>
      <div className='d-flex justify-content-center align-item-center'>
        <div style={{maxWidth:'400px'}}>
        <img className='w-100 h-100' style={{objectFit:'cover'}} src={Number} />
        </div>
      </div>
    </div>
  )
}

export default Contact