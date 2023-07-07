import React from 'react'

function Testing() {
  let word = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quae amet architecto illum iure molestias expedita sed officia corporis, consequuntur ad explicabo deleniti quam optio nam hic in blanditiis libero?'
  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh',height:'100%' }}>
      <div className='row' style={{marginTop:'100px'}}>
        <div className='col-md-4'>
          <div className='w-100 h-100 overflow-hidden' style={{ borderRadius: '20px', backgroundColor: '#313139'}}>
            <div className='overflow-hidden' style={{ width: '100%', height: '140px', backgroundColor: '#292930', top: '5px', left: '5px' }}>
              <img className='img h-100 w-100' style={{ objectFit: 'cover', objectPosition: 'top' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
            </div>
            <div className='p-3 pt-2 pb-0'>
              <p style={{ cursor: 'pointer' }} className='text-white fw-bolder mb-0'>Name</p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>{word.length > 200 && `${word.substring(0, 150)}...`} </p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>Learn more</p>
            </div>
          </div>
        </div>
      </div> 
      <div className='row m-5' >
        <div className='col-md-4'>
          <div className='w-100 h-100 overflow-hidden' style={{ backgroundColor: '#313139' }}>
            <div className='overflow-hidden' style={{ width: '100%', height: '140px', backgroundColor: '#292930', top: '5px', left: '5px' }}>
              <img className='img h-100 w-100' style={{ objectFit: 'cover', objectPosition: 'top' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
            </div>
            <div className='p-3 pt-2 pb-0'>
              <p style={{ cursor: 'pointer' }} className='text-white fw-bolder mb-0'>Name</p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>{word.length > 200 && `${word.substring(0, 150)}...`} </p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>Learn more</p>
            </div>
          </div>
        </div>
      </div> 
      <div className='row m-5' >
        <div className='col-md-4'>
          <div className='w-100 h-100 overflow-hidden' style={{ backgroundColor: '#313139', borderRadius:'20px' }}>
            <div className='overflow-hidden p-2 m-2' style={{ width: '140px', height: '140px', backgroundColor: '#292930', top: '5px', left: '5px', borderRadius:'50%' }}>
              <img className='img h-100 w-100' style={{ objectFit: 'cover', objectPosition: 'top', borderRadius:'50%' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
            </div>
            <div className='p-3 pt-2 pb-0'>
              <p style={{ cursor: 'pointer' }} className='text-white fw-bolder mb-0'>Name</p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>{word.length > 200 && `${word.substring(0, 150)}...`} </p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>Learn more</p>
            </div>
          </div>
        </div>
      </div> 
      <div className='row m-5' >
        <div className='col-md-4'>
          <div className='w-100 h-100' style={{ backgroundColor: '#313139', borderRadius:'20px' }}>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className='overflow-hidden p-1 m-2' style={{ width: '100%', height: '150px', borderRadius:'50px' }}>
              <img className='img h-100 w-100' style={{ objectFit: 'cover', objectPosition: 'top', borderRadius:'50px' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
            </div>
            </div>
            <div className='p-3 pt-2 pb-0'>
              <p style={{ cursor: 'pointer' }} className='text-white fw-bolder mb-0'>Name</p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>{word.length > 200 && `${word.substring(0, 150)}...`} </p>
            </div>
            <div className='p-3 pt-0 pb-0'>
              <p className='text-white pb-0'>Learn more</p>
            </div>
          </div>
        </div>
      </div> 
      <div className='row m-5 gap-3' >
        <div className='col-6 overflow-hidden' style={{ backgroundColor: '#313139', borderRadius: '20px', border:'2px solid black' }}>
          <div className='row'>
            <div className='col-5 p-0'>
              <img className='img h-100 w-100' style={{ objectFit: 'cover', objectPosition: 'top' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
            </div>
            <div className='col-7'>
              <div className='w-100 h-100 d-flex flex-column justify-content-center'>
                <p style={{ cursor: 'pointer' }} className='text-white fw-bolder mb-0'>Tectsoft</p>
                <p className='text-white pb-0'>{word} </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 p-0 position-relative'>
            <div className='w-100 h-100 overflow-auto' style={{ backgroundColor: '#313139' }}>
              <div className='w-100 d-flex justify-content-center align-items-center'>
                  <img className='img h-100 w-100' style={{ objectFit: 'cover' }} src='https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt='' loading="lazy" />
              </div>
            </div>
            <div className='position-absolute w-100 bg-white bottom-0 p-3' style={{height:'100px'}}>
              <p className='fs-4 mb-0'>New form</p>
              <p className='fs-6 text-muted'>New form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testing