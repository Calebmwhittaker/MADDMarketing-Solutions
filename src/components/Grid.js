import React from 'react'

export default function Grid() {
  return (
    <div className='services'>
        <div className="row col-12 mr-2">
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" width="300px" src="computer_image.png" alt="Website Design"></img>
            <p>Website Design</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" width="300px" src="social_media_image.png" alt="Social Media"></img>
            <p>Social Media</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" width="300px" src="lightbulb_image.png" alt="Strategy"></img>
            <p>Strategy</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" width="300px" src="coaching_image.png" alt="Coaching"></img>
            <p>Coaching</p>
  </div>
  <div className="learnMore col-12 py-3">
        <button className='btn btn-dark'>
            <a 
              href="https://www.maddmarketingsolutions.com/services"
              target="_blank"
              rel="noreferrer"
            >
              Our Services
            </a>
          </button>
          </div>
</div>
    </div>
  )
}
