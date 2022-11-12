import React from 'react'

export default function Grid() {
  return (
    <div className='services'>
        <div className="row">
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" src="computer_image.png" alt="Website Design"></img>
            <p>Website Design</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" src="social_media_image.png" alt="Social Media"></img>
            <p>Social Media</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" src="lightbulb_image.png" alt="Strategy"></img>
            <p>Strategy</p>
  </div>
  <div className="col col-lg-6 col-xl-3">
  <img className="my-4" src="coaching_image.png" alt="Coaching"></img>
            <p>Coaching</p>
  </div>
</div>
    </div>
  )
}
