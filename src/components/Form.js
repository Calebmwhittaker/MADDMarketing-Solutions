import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">First Name</label>
      <input type="email" className="form-control" id="inputName" placeholder="First Name"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputName">Last Name</label>
      <input type="email" className="form-control" id="inputName2" placeholder="Last Name"></input>
    </div>
  </div>
  <div className="form-group">
    <label for="inputEmail">Email</label>
    <input type="text" className="form-control" id="inputEmail" placeholder="christopherrobin@gmail.com"></input>
  </div>
  <div className="form-row">
    <div className="form-group col-md-2">
      <label for="inputPhone">Phone Number</label>
      <input type="tel" className="form-control" id="inputPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"></input>
    </div>
  </div>
  <br></br>
  <button type="submit" className="btn btn-secondary my-4">Send</button>
</form>
    </div>
  );
};
