import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
  <div className="form-heading-row form-row">
  <div className="form-heading form-group col-12 col-md-7 text-center">
    <h2>Contact Us!</h2>
    <h3>We cannot wait to work with you.</h3>
  </div>
  </div>
<div className='form-row'>
    <div className="form-group col-5">
      <label htmlFor="inputName">First Name*</label>
      <input type="text" className="form-control" id="inputName" placeholder="First Name" autoComplete="off"></input>
    </div>
    <div className="form-group col-5">
      <label htmlFor="inputName">Last Name*</label>
      <input type="text" className="form-control" id="inputName2" placeholder="Last Name" autoComplete="off"></input>
    </div>
  </div>
  <div className="form-group col-12 col-md-5">
    <label htmlFor="inputEmail">Email*</label>
    <input type="email" className="form-control" id="inputEmail" placeholder="christopherrobin@gmail.com" autoComplete="off"></input>
  </div>
    <div className="form-group col-12 col-md-5">
      <label htmlFor="inputPhone">Phone Number*</label>
      <input type="tel" className="form-control" id="inputPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" autoComplete='off'></input>
    </div>
    <div className="message form-group col-12 col-md-5">
      <label htmlFor="message">Message*</label>
    <textarea name="career[message]" className="form-control"
          placeholder="Write your details" required></textarea>
          </div>
          <div className="form-group col-12"></div>
  <button type="submit" className="btn btn-secondary mb-4 btn-lg">Send</button>
</form>
    </div>
  );
};
