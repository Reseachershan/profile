import React from 'react'
import { techStack } from '../Json/web'

function MyTechStack() {
  return (
    <section id='my-tech' className='container mb-0 d-flex flex-column gap-5 align-items-center'>
      <h2>My Tech Stack</h2>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 h-100' style={{ maxWidth: '50rem' }}>
        {techStack.map((tech: { url: string, logo: any }) =>
          <div>
            <a href={tech.url} target='_blank' rel="noreferrer">
              <img src={tech.logo} alt='' />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyTechStack