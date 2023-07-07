import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Meeting() {
  const [iframeSize, setIframeSize] = useState('1700px')
  const [windowSize, setWindowSize] = useState<{width: number | null, height: number | null}>({
    width: null,
    height: null
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width) {
      if (windowSize.width > 1100) {
        setIframeSize('1700px')
      }
      if (windowSize.width <= 1050) {
        setIframeSize('1850px')
      }
      if (windowSize.width <= 390) {
        setIframeSize('1900px')
      }
    }
  }, [windowSize])
  const navigate = useNavigate();
  return (
    <div className='meeting-main'>
      <button onClick={() => navigate('/')} className="d-flex justify-content-center align-items-center position-absolute translate-middle p-2" style={{ zIndex: 10, left: 120, top: 110, border: '2px solid var(--dark)', borderRadius: '50%', cursor: 'pointer' }} >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" style={{color:'var(--dark)'}} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
      </button>
      <div className='position-relative'>
        <div className='nav-brand position-absolute' style={{ zIndex: 1, maxWidth: '420px', fontWeight: 'bolder', fontSize: '2.5rem', fontFamily: 'Rubik, sans-serif' }}>
          Muhammad Asim Abbas
        </div>
      </div>
      <div className='position-relative' style={{ zIndex: 0 }}>
        <iframe src="https://outlook.office365.com/owa/calendar/OfficeHours@zetrasoft.com/bookings/" title='meeting' width="100%" height={iframeSize} style={{ border: '0px' }}></iframe>
      </div>
    </div>
  )
}

export default Meeting