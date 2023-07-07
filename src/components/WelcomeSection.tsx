import React, { FC } from 'react'
import Main from '../assets/main_image.jpg'

type Props = {
  handleBackClick(className: string): void
}

const WelcomeSection: FC<Props> = ({ handleBackClick }) => {
  return (
    <section className='welcome position-relative'>
      <div className='container position-relative' style={{ zIndex: 2 }}>
        <div className='row welcome-section' style={{height:'100vh'}}>
          <div className='col d-flex flex-column justify-content-center order-2 order-md-1'>
            <div className='position-relative clr-theme-light text-center'>
              <h1 className='mb-0'>Hi! I am Muhammad <br />Asim Abbas</h1>
              <p className='designation mb-0 text-center'>Full Stack Web/Mobile Developer</p>
            </div>
            <div className='d-flex justify-content-center mt-md-0 mt-4'>
              <button onClick={() => handleBackClick('about-me')} className='btn-explore-more mt-sm-4 mt-0'>Explore more
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='position-absolute top-0 start-0 end-0 bottom-0' style={{ zIndex: 1, backgroundColor:'var(--dark)', opacity: '0.4' }}>
      </div>
    </section>
  )
}

export default WelcomeSection