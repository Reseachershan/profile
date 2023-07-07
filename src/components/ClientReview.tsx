import React, {useState} from 'react'
import { reviews } from '../Json/web'
import Pagination from "react-js-pagination"

const ClientReview = () => {
  const [activePage, setActivePage] = useState<number>(1)
  const [postsPerPage] = useState(3);
  const handlePageChange = (pageNumber: number) => {
		setActivePage(pageNumber)
	}
  const indexOfLastPost = activePage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = reviews?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div id='review' className='container' style={{ minHeight: '500px' }}>
      <h2>Client Reviews</h2>
      <div className='d-flex gap-5 flex-column justify-content-center align-items-center mt-4'>
        {currentPosts.map((items) => {
            return (
              <div className='cardMain w-100 w-md-75 h-100 clr-theme-light'>
                <div className='d-flex flex-sm-nowrap flex-wrap justify-content-center justify-content-sm-start'>
                  <div style={{width:'100%', maxWidth:"110px" }} className='d-flex flex-column align-items-center text-center p-2'>
                    <div className='mb-1' style={{ width: "70px", height: '70px' }}>
                      <img className='w-100 h-100' style={{ objectFit: "contain", objectPosition: "center", borderRadius: "7px" }} src={items.image} alt='' />
                    </div>
                    <div className='w-100'>
                      <p className='ps-2 mb-0 text-nowrap text-truncate mb-1' style={{ fontSize: '0.8rem', lineHeight: '16px',width:"100%" }}>{items.name}</p>
                      <p className='mb-0' style={{ fontSize: '11px' }}>{items.date}</p>
                    </div>
                  </div>
                  <div className="vr d-none d-sm-inline" style={{width:'1px', backgroundColor:'#939598' }}></div>
                  <div className='mb-0 p-2 ps-3 text-center text-sm-start'>
                    <p style={{ fontSize: '1rem' }}>{items.comment}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mt-4'>
					<Pagination
						prevPageText='<'
						nextPageText='>'
						activePage={activePage}
						itemsCountPerPage={3}
						totalItemsCount={reviews.length}
						pageRangeDisplayed={3}
						onChange={handlePageChange}
						hideFirstLastPages
					/>
				</div>
    </div>
  )
}

export default ClientReview