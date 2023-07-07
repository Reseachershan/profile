import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { industries } from '../Json/web'

interface Details {
  name: string,
  description?: string,
  image: any,
  url: string,
  screen?: any[],
  features: string[],
  position?: 'top' | 'center' | 'bottom',
  order?: boolean
}


const IndustriesDetail = () => {
  const [loading, setLoading] = useState(true)
  useLayoutEffect(() => {
    //@ts-ignore
    window.scrollTo(0, document.getElementById("scroll_Top"))
  }, [])

  const { name } = useParams()
  const navigate = useNavigate();

  const data = useMemo(() => {
    if (name) {
      return industries.filter((industry) => {
        //@ts-ignore
        if (industry.route === name) {
          setLoading(false)
          return industry
        } else {
          setLoading(false)
        }
      })
    }
  }, [name])
  
  
  if (loading) {
    return <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className="spinner-border text-light" role="status"></div>
    </div>
  }

  if (!data?.length) {
    return <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <h3 style={{ fontSize: '3rem', color: 'var(--light)' }}>No Industry Found</h3>
  </div>
  }

  return (
    <>
      <div id='scroll_Top' className='d-flex justify-content-center align-items-center container align-items-center' style={{ minHeight: '100vh', width: '100%', height: '100%' }}>
        <div className='w-100' style={{ marginTop: '100px' }}>
          <div className='d-sm-flex d-block justify-content-center gap-4'>
            <button onClick={() => navigate('/',{state: { scrollToRef: true }})} className="d-flex justify-content-center align-items-center p-2" style={{ zIndex: 10, height: '35px', width: '35px', border: '2px solid var(--light)', borderRadius: '50%', cursor: 'pointer' }} >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left text-white" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>
            {data && <p className='w-100 mt-sm-0 mt-2' style={{ color: 'var(--light)', fontSize: '1.3rem' }}>{data[0]?.industryDetail}</p>}
          </div>
          {
            // @ts-ignore
            Boolean(data && data[0].website) && data[0]?.website.map((items: Details) => {
              return (
                <>
                  <div className='row d-flex justify-content-center w-100 h-100'>
                    <div className={`col-md-6 mt-5 ${items.order === true ? 'order-md-1' : 'order-md-2'}`}>
                      <div className='overflow-hidden' style={{ maxWidth: '400px', maxHeight: '400px' }} >
                        <img src={items.image} style={{ objectFit: 'cover' }} className='w-100 h-100' />
                      </div>
                    </div>
                    <div className={`col-md-6 mt-5 d-flex flex-column ${items.order === true ? 'order-md-2' : 'order-md-1'}`}>
                      <h3 style={{ fontSize: '3rem', color: 'var(--light)' }}>{items.name}</h3>
                      <p style={{ color: 'var(--light)', fontSize: '18px' }}>{items.description}</p>
                      <div className='d-flex flex-wrap gap-4'>
                        {
                          items.features.map((features) => {
                            return (
                              <>
                                <button className='p-1 px-3' style={{ backgroundColor: 'var(--yellow)', color: 'var(--dark)', borderRadius: '40px' }}>{features}</button>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default IndustriesDetail