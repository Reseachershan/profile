import clsx from 'clsx';
import React, { FC, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import cross from '../assets/cross.svg'
import Number from '../assets/number.png'

type Props = {
  activeClass: string
  handleBackClick(id: string): void
  handleActive(className: string): void
  slide: boolean
  setSlide(b: boolean): void
}

const Navbar: FC<Props> = ({ activeClass, handleBackClick, handleActive, slide, setSlide }) => {
  const [shadow, setShadow] = useState(false)
  const goTo = (section: string) => {
    if (location.pathname === '/meeting') {
      location.pathname = '/'
    }
    handleBackClick(section)
    handleActive(section)
    setSlide(false)
  }

  const AddShadow = () => {
    if (window.scrollY > 250) {
      setShadow(true);
    }
    else {
      setShadow(false);
    }
  };

  window.addEventListener('scroll', AddShadow);

  const navigate = useNavigate();
  return (
    <header style={{zIndex:111, boxShadow: shadow ? '0 2px 6px -2px var(--light)' : ''}}>
      <nav className='nav-desktop container'>
        <div className='nav-brand clr-theme-light cursor-pointer' onClick={() => navigate('/')}>M. Asim Abbas </div>
        <ul className='nav d-none d-lg-flex align-items-center gap-4'>
          <li className={clsx('nav-link-desktop', {'active': activeClass === 'home'})} onClick={()=>{ navigate('/'); goTo('home')}}>Home</li>
          <li className={clsx('nav-link-desktop', {'active': activeClass === 'about-me'})} onClick={()=>{navigate('/'); goTo('about-me')}}>About Me</li>
          <li className={clsx('nav-link-desktop', {'active': activeClass === 'my-projects'})} onClick={() => {navigate('/'); goTo('my-projects')}}>Portfolio</li>
          <li className={clsx('nav-link-desktop', {'active': activeClass === 'offered-services'})} onClick={() => {navigate('/'); goTo('offered-services')}}>Services</li>
          <li>
            <Link to='/meeting' className='btn-lets-meet' target="_blank">Let's Meet</Link>
          </li>
        </ul>
        <button className='btn btn-sm d-flex d-lg-none' onClick={() => setSlide(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list text-white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      <nav className='nav-mobile' data-slide={slide}>
        <button className='position-absolute' style={{ top: "15px", right: "9px" }} onClick={() => setSlide(false)}>
          <img src={cross} alt='close' />
        </button>

        <ul className='nav-links text-white text-center'>
          <li onClick={() => {navigate('/'); goTo('home')}}>Home</li>
          <li onClick={() => {navigate('/'); goTo('about-me')}}>About Me</li>
          <li onClick={() => {navigate('/'); goTo('my-projects')}}>Portfolio</li>
          <li onClick={() => {navigate('/'); goTo('offered-services')}}>Services</li>
          <li className='w-100 d-flex justify-content-center'> 
            <a href="tel:+923011030303"><div style={{ maxWidth: '140px' }}>
              <img className='w-100 h-100' style={{ objectFit: 'contain' }} src={Number} />
            </div></a>
          </li>
          <li onClick={() => setSlide(false)}>
            <Link to='/meeting' target="_blank">
              <button>Let's Meet</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar