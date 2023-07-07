import React, { useState, useEffect } from 'react'
import { web, app } from '../Json/web'
import { Modal } from 'react-bootstrap-v5';
//@ts-ignore
import Cone from '../assets/cone.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import "swiper/css";

interface Features {
  name: string
  description: string
}
interface Projects {
  name: string
  image: string
  url: string
  description: string
  features: Features[]
  screen: string[]
  mobile_screen: string[]
}


function MyProjects() {
  const [tect, setTect] = useState('web')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScreenImage, setIsScreenImage] = useState(false)
  const [slide, setSlide] = useState(0)
  const [screenImage, setScreenImage] = useState()
  const [project, setProject] = useState<Projects>()
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseImageModal = () => {
    setIsScreenImage(false)
  }

  const handleProject = (value: any) => {
    if (Boolean(value?.screen)) {
      setSlide(0)
      setProject(value)
      setIsModalOpen(true)
    }
  }

  const handleFullScreenImage = (value: any) => {
    setIsScreenImage(true)
    setScreenImage(value)
  }

  const SwiperButtonNext = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button className="d-flex justify-content-center align-items-center position-absolute translate-middle" style={{ zIndex: 1000, right: 0, top: 30, border: 'none', backgroundColor: 'black', borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { swiper.slidePrev() }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left text-white fw-bolder" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
    </button>
  };

  const SwiperButtonBack = ({ children }: { children: any }) => {
    const swiper = useSwiper();
    return <button className="d-flex justify-content-center align-items-center position-absolute translate-middle" style={{ zIndex: 1000, right: 0, top: 70, border: 'none', backgroundColor: 'black', borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { swiper.slideNext() }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right text-white fw-bolder" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
    </button>
  };

  //@ts-ignore
  const imageForSmallerScreen = tect == 'app' ? 'md' : 'lg'
  let pro = Boolean(tect === 'web' && windowSize[0] < 550) ? project?.mobile_screen : project?.screen

  return (
    <section id='my-projects' className='my-projects container mb-5'>
      <h2>Portfolio</h2>
      <div className='d-flex justify-content-center mt-3'>
        <div className='d-flex position-relative overflow-hidden' style={{ backgroundColor: 'rgba(254,231,21,0.5)', width: '300px', height: '55px', borderRadius: '50px' }}>
          <div className='position-absolute w-50 h-100' style={{ backgroundColor: "#FEE715FF", borderRadius: '50px', transition: '.3s ease', right: tect === 'app' ? 0 : '50%' }}></div>
          <div onClick={() => setTect('web')} className='d-flex justify-content-center align-items-center h-100 w-50' style={{ zIndex: 0, borderRadius: '50px', cursor: 'pointer', color: '#212529' }}>
            Web
          </div>
          <div onClick={() => setTect('app')} className='d-flex justify-content-center align-items-center h-100 w-50' style={{ zIndex: 0, borderRadius: '50px', cursor: 'pointer', color: '#212529' }}>
            App
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-md-start justify-content-center row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4 gy-4'>
        {tect === 'web' &&
          <>
            {web.map((items) => {
              return (
                <div className='col'>
                  <div className='project-web position-relative overflow-hidden' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <div className='d-flex gap-1 justify-content-end align-items-center w-100 text-center pe-2 bg-white' style={{ zIndex: 11, height: '22px' }}>
                      <div style={{ backgroundColor: '#6eb34a', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                      <div style={{ backgroundColor: '#dfac53', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                      <div style={{ backgroundColor: '#d7665d', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                    </div>
                    <div className='project-image image w-100 overflow-hidden' style={{ backgroundColor: '#f9f9f9' }}>
                      <img style={{ objectFit: 'cover', objectPosition: items.position ? 'top' : 'center' }} src={items.image} className='w-100 h-100' />
                      <div className='card-projects position-absolute bottom-0 top-0 start-0 end-0 w-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        {Boolean(items?.screen) &&
                          <button className='btn-project' onClick={() => handleProject(items)}>
                            View More
                          </button>
                        }
                      </div>
                    </div>
                    <div className='w-100 text-center project-name' style={{ zIndex: 11 }}>
                      <p className='mb-0 text-nowrap' style={{ textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis' }}>{items.name}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        }
        {tect === 'app' &&
          <>
            {app.map((items) => {
              return (
                <div className='col'>
                  <div className='project-web position-relative overflow-hidden' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <div className='d-flex gap-1 justify-content-end align-items-center w-100 text-center pe-2 bg-white' style={{ zIndex: 11, height: '22px' }}>
                      <div style={{ backgroundColor: '#6eb34a', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                      <div style={{ backgroundColor: '#dfac53', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                      <div style={{ backgroundColor: '#d7665d', width: '6px', height: '6px', borderRadius: '100%' }}></div>
                    </div>
                    <div className='project-image image w-100' style={{ backgroundColor: '#f9f9f9' }}>
                      <img style={{ objectFit: 'contain', objectPosition: 'center', padding: '10px' }} src={items.image} className='w-100 h-100' />
                      <div className='card-projects position-absolute bottom-0 top-0 start-0 end-0 w-100 d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        {Boolean(items?.screen) && <button className='btn-project' onClick={() => handleProject(items)}>
                          View More
                        </button>
                        }
                      </div>
                    </div>
                    <div className='w-100 text-center project-name' style={{ zIndex: 11 }}>
                      <p className='mb-0 text-nowrap' style={{ textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis' }}>{items.name}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        }
      </div>
      <Modal contentClassName='overflow-lg-hidden overflow-auto h-100' onHide={handleCloseModal} centered size='lg' fullscreen='lg-down' show={isModalOpen}>
        <div className='position-relative d-lg-flex d-none flex-lg-column flex-row w-100 h-100 overflow-hidden p-0' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className='position-relative d-lg-flex d-none' style={{ width: '61%', maxHeight: '510px', height: '100%', zIndex: '11' }}>
            <img className='d-lg-flex d-none w-100 h-100' style={{ objectFit: 'cover', objectPosition: 'center' }} src={Cone} />
            <div className='position-absolute top-0 start-0 bottom-0 end-0 d-flex flex-column justify-content-center'>
              <h3 className='fw-bolder pt-2 text-capitalize mb-0 pb-2 ps-5' style={{ fontSize: '3rem', color: 'var(--light)' }}>{project?.name}</h3>
              <div className='ps-5 py-2'>
                <hr className='m-0' style={{ backgroundColor: 'var(--light)', width: '100px', height: '5px' }} />
              </div>
              <p className='mb-0 mb-0 p-5 pb-0 pt-0' style={{ color: 'var(--light)' }}>{project && project.description ? project.description.length > 400 ? project?.description.slice(0, 400) + '...' : project.description : 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.'}</p>
              <div className='position-absolute p-5 bottom-0'>
                <button onClick={() => handleFullScreenImage(project?.screen[slide])} style={{ backgroundColor: 'var(--yellow)', color: '(var(--dark))', fontSize: '1rem', borderRadius: '40rem', width: '140px', height: '40px' }}>Learn more</button>
              </div>
            </div>
          </div>
          <div className='position-absolute' style={{ width: '57%', top: '0px', right: '0px', bottom: '0px', zIndex: '1', maxHeight: '510px', height: '100%', }}>
            {/* @ts-ignore */}
            <div className='d-flex position-relative h-100 w-100'>
              <Swiper
                loop={true}
              >
                {project?.screen && project?.screen?.length > 1 && <>
                  <SwiperButtonNext>Slide</SwiperButtonNext>
                  <SwiperButtonBack>Slide</SwiperButtonBack>
                </>}
                {
                  project?.screen.map((item) => {
                    return (
                      <SwiperSlide>
                        <div className='position-relative d-flex justify-content-center align-items-center image-slide h-100 w-100 bg-white'>
                          {tect == 'web' ? <div className='ps-5'>
                            <img
                              onClick={() => handleFullScreenImage(item)}
                              className="w-100 h-100 overflow-hidden"
                              src={item}
                              style={{ objectFit: 'cover', cursor: 'pointer', }}
                            />
                          </div> : <img
                            onClick={() => handleFullScreenImage(item)}
                            className="w-100 h-100 overflow-hidden"
                            src={item}
                            style={{ objectFit: 'cover', cursor: 'pointer', }}
                          />}
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
        <div className='d-lg-none d-block' style={{ overflowX: 'hidden', overflowY: 'auto' }}>
          <button className='btn position-absolute d-flex justify-content-between align-items-center' style={{ top: "3px", right: "10px", zIndex: 11, backgroundColor: 'black', borderRadius: '100%', padding: '10px' }} onClick={() => handleCloseModal()}>
            <svg width='10' height='10' viewBox="0 0 511.058 511.058" xmlns="http://www.w3.org/2000/svg"><g><path fill='white' d="m511.058 60.811-60.811-60.811-194.718 194.718-194.718-194.718-60.811 60.811 194.718 194.718-194.718 194.718 60.811 60.811 194.718-194.718 194.718 194.718 60.811-60.811-194.718-194.718z"></path></g></svg>
          </button>
          <div>
            {
              Boolean(project && project?.screen) &&
              <div className='row'>
                <div style={{ backgroundColor: 'var(--dark)' }} className={`${Boolean(project?.features?.length) ? 'col-lg-5' : 'col-12'} col-12`}>
                  <h3 className='fw-bolder pt-2 text-capitalize mb-0 pb-2 ps-5' style={{ fontSize: '3rem', color: 'var(--light)' }}>{project?.name}</h3>
                  <div className='ps-5 py-2'>
                    <hr className='m-0' style={{ backgroundColor: 'var(--light)', width: '100px', height: '5px' }} />
                  </div>
                  <p className='mb-0 mb-0 p-5 pb-0 pt-0' style={{ color: 'var(--light)' }}>{project && project.description ? project?.description : 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.'}</p>
                  <div className='ps-5 py-2'>
                    <button onClick={() => handleFullScreenImage(project?.screen[slide])} style={{ backgroundColor: 'var(--yellow)', color: '(var(--dark))', fontSize: '1rem', borderRadius: '40rem', width: '140px', height: '40px' }}>Learn more</button>
                  </div>
                </div>
                <div className={`${Boolean(project?.features?.length) ? 'col-lg-5' : 'col-12'} col-12`}>
                  <div className='d-flex position-relative overflow-hidden' style={{ height: '100%', width: '100%' }}>
                    <Swiper
                      loop={true}
                    >
                      {pro && pro.length > 1 && <>
                        <SwiperButtonNext>Slide</SwiperButtonNext>
                        <SwiperButtonBack>Slide</SwiperButtonBack>
                      </>
                      }
                      {
                        pro?.map((item: any) => {
                          return (
                            <SwiperSlide>
                              <div className='position-relative image-slider w-100 h-100' style={{ width: '100%' }}>
                                <img
                                  onClick={() => handleFullScreenImage(item)}
                                  className="w-100 h-100"
                                  src={item}
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </Modal>

      {/* @ts-ignore */}
      <Modal contentClassName='overflow-auto p-0' onHide={handleCloseImageModal} size={imageForSmallerScreen} fullscreen={imageForSmallerScreen + '-down'} show={isScreenImage}>
        <div className={tect == 'app' ? 'full-image-modal' : 'full-image-modal-app'} style={{ width: '100%', maxWidth: '1200px', overflowY: 'auto', overflowX: 'hidden' }}>
          <button className='btn position-absolute d-flex justify-content-between align-items-center' style={{ top: "10px", right: "10px", zIndex: 11, backgroundColor: 'black', borderRadius: '100%', padding: '10px' }} onClick={() => handleCloseImageModal()}>
            <svg width='15' height='15' viewBox="0 0 511.058 511.058" xmlns="http://www.w3.org/2000/svg"><g><path fill='white' d="m511.058 60.811-60.811-60.811-194.718 194.718-194.718-194.718-60.811 60.811 194.718 194.718-194.718 194.718 60.811 60.811 194.718-194.718 194.718 194.718 60.811-60.811-194.718-194.718z"></path></g></svg>
          </button>
          <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
          <img
            className='w-100 h-100 overflow-auto'
            src={screenImage}
            style={{ objectFit: 'cover', maxHeight:'600px', maxWidth:'600px' }}
          />
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default MyProjects
