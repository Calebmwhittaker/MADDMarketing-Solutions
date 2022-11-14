import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="social-media-stock-photo.jpg" className="d-block w-100" alt=""></img>
    </div>
    <div className="carousel-item">
      <img src="web-design-stock-photo.jpg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="coaching-stock-photo.jpg" className="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
    </div>
  )
}
