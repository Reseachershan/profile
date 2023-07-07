import React from 'react'
import { services } from '../Json/web'

const Services = () => {
  return (
    <section id='offered-services' className='services container'>
      <h2>Offered Services</h2>
      <div className='row clr-theme-light g-4 mt-4'>
        {services.map((service) =>
          <div className='col-12 col-lg-4'>
            <div className='service-card'>
              <div className='image' style={{ backgroundColor: service.image.bgColor ?? 'transparent' }}>
                <img src={service.image.src} alt={service.image.alt} className='w-100 h-100' />
              </div>
              <div className='content'>
                <h3>{service.title}</h3>
                <p className='mb-0'>{service.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services