import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Routing from './routes/Routing';
import ReCAPTCHA from 'react-google-recaptcha'
import { Modal } from 'react-bootstrap-v5';
import './App.scss';

function App() {
  const [slide, setSlide] = useState(false)
  const [activeClass, setActiveClass] = useState('')
  const [captchaValue, setCaptchaValue] = useState('')
  const location = useLocation()

  function scrollToTestDiv(id) {
    window.scrollTo(0, document.getElementById(id).offsetTop - document.querySelector('header').offsetHeight-45)
  }
  const handleActive = (className) => {
    setActiveClass(className)
  }

  useEffect(() => {
    if (location?.state?.scrollToRef) {
      scrollToTestDiv('industries-we-serve')
    }
  }, [location])

  const handleCaptcha = (value) => {
    setCaptchaValue(value)
  }

  return (
    <div className='position-relative'>
      {/* {!captchaValue && <CaptchaModal handleCaptcha={handleCaptcha}/> } */}
      {Boolean(location.pathname !== '/meeting') && <canvas id="canvas" style={{ position: 'fixed', height: "100vh", width: '100%', zIndex: 0 }}></canvas>}
      <div className='App position-relative' style={{ zIndex: 1, height: 'fit-content', transition: '1s ease-in-out', backgroundColor:'#101820FF'}} >
        <Navbar activeClass={activeClass} handleActive={handleActive} slide={slide} setSlide={setSlide} handleBackClick={scrollToTestDiv} />
        <Routing handleBackClick={scrollToTestDiv}/>
      </div>
    </div>
  );
}

const CaptchaModal = ({handleCaptcha}) => {

  return (
  <Modal contentClassName='h-100 w-100 h-100' centered show={true} size='sm' fullscreen='sm-down'>
    <div className='d-flex justify-content-center align-items-center'>
    <ReCAPTCHA
      sitekey="6LcdL2IkAAAAABH32OEPVzNl3ZZOtJn3UD_Dmwfn"
      onChange={handleCaptcha}
    />
    </div>
  </Modal>
  )
}

export default App;
