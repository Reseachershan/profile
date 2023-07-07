import React from 'react'
import { industries } from '../Json/web'
import {useNavigate} from 'react-router-dom';

const Industries = () => {
  const navigate = useNavigate();
  
  return (
    <section id='industries-we-serve' className='industries container'>
      <h2>Transforming Industries through Technology</h2>
      <div className='row d-flex justify-content-center align-items-center clr-theme-light g-4 mt-4'>
        {industries.map((industry) =>
          <div className='col-12 col-md-4 d-flex justify-content-center align-items-center' style={{cursor:'pointer'}} onClick={() => navigate(`/industries/${industry.route}`)}>
            <div className='position-relative industries-col'>
              <div className='position-absolute content pt-3'>
                <h2 className='heading'>{industry.title}</h2>
                <p className='mb-0 mt-3'>{industry.description}</p>
              </div>
              <div className='image overflow-hidden' style={{ backgroundColor: 'var(--dark)' }}>
                <img className='w-100 h-100' style={{ objectFit: 'cover', objectPosition: 'center' }} src={industry.image.src} alt={industry.image.alt} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Industries