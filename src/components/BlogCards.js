import React from 'react'

export default function BlogCards() {
  return (
    <div>
        <div className="row col-12">
            <div className="col-12 col-lg-6 text-center px-3">
                <img className="my-4" src="blog-photo-1.jpg" alt="Website Design"></img>
                <p>Digital Marketing 8/11/22</p>
                <h1>Why you need a digital marketer on your team</h1>
            </div>
            <div className="col-12 col-lg-6 text-center px-3">
                <img className="my-4" src="blog-photo-2.jpg" alt="Social Media"></img>
                <p>Digital Marketing 7/27/22</p>
                <h1>Become a storyteller! Use video to grow your audience.</h1>
            </div>
            <div className="col-12 text-center">
                <img className="my-4" src="blog-photo-3.jpg" alt="Social Media"></img>
                <p>Digital Marketing 7/15/22</p>
                <h1>What is Digital Marketing? How to use online tools for customer growth.</h1>
            </div>
        </div>
    </div>
  )
}
