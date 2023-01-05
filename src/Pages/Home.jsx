import React from 'react'
import david from '../img/david.png'
import home from '../img/home.jpg'

export default function Home() {
  return (
    <div className='row m-0 p-0'>
        <div className='col-sm-6'>

              {/* button to trigger the modal */}
         <button className='btn btn-primary mt-4 ml-1 mb-3' data-toggle='modal' data-target='#myModal'>
            Launch Modal
            </button>

              {/* modal box with a fade, pop-up message when one visit the page */}
              <div className='modal fade' id='myModal'>
                  
                  <div className='modal-dialog m-5'>
                      <div className='modal-content'>

                          <div className='modal-header'>
                              <h5 className='modal-title'>One Vision Church</h5>
                                  <button type='button' className='close' data-dismiss='modal'></button>
                                      </div>
                                          
                        <div className='modal-body text-justify'>
                              <p>We are a vibrant Holy Spirit led family church that will inspire you to get 
                                your life right with God and live with passion as you serve God. One Hope One 
                                Heart One Harvest <br/><hr/>
                                  <small>Kindly support the mission, Today!</small>
                                  </p>
                                      </div>

                          <div className='modal-footer'>
                              <button className='btn btn-primary' data-dismiss='modal'>&times;</button>
                                  </div>
                      </div>
                  </div>
              </div>

                              <div className=' p-1'>
                                <img src={david} alt='david' className='rounded-circle rounded mx-auto d-block' />
                              </div>

                              <div className='font-weight-bold text-justify p-5'>
                                <p className='p-2'>ONE HOPE.<br/> ONE HEART.<br/>ONE HARVEST.<br/>
                                  </p>  </div>
                        </div>

          <div className='col-sm-6 home-img'>
          <img src={home} alt='david'  className='home-image' />
          </div>




    </div>
  )
}




     
//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8y49jnSHJILs_y5qsUc-qA4JxQ4MYFGzDKmC9IZvEPX6nYA/viewform?embedded=true" width="640" height="1687" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>