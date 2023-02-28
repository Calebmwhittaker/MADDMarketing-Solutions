import React from "react";
import "../assets/styles/components/Form.css";

export default function Form() {
  return (
    <div>
      <form style={{ backgroundColor: "#355c7e" }}>
        <div className="form-heading-row form-row">
          <div
            style={{ textAlign: "center" }}
            className="form-heading form-group col-12 col-md-7"
          >
            <h2>Contact Us!</h2>
            <h3>We cannot wait to work with you.</h3>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="inputName">First Name*</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="First Name"
              autoComplete="on"
            ></input>
          </div>
          <div className="form-group col-6">
            <label htmlFor="inputName">Last Name*</label>
            <input
              type="text"
              className="form-control"
              id="inputName2"
              placeholder="Last Name"
              autoComplete="on"
            ></input>
          </div>
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="inputEmail">Email*</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="email@email.com"
            autoComplete="on"
          ></input>
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="inputPhone">Phone Number*</label>
          <input
            type="tel"
            className="form-control"
            id="inputPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            autoComplete="on"
          ></input>
        </div>
        <div style={{ height: "20vh" }} className="message form-group col-12">
          <label htmlFor="message">Message*</label>
          <textarea
            name="career[message]"
            className="form-control"
            placeholder="Write your details"
            required
            style={{ height: "100%" }}
          ></textarea>
        </div>
        <div className="form-group col-12"></div>
        <button
          type="submit"
          style={{ marginBottom: "25px" }}
          className="btn btn-secondary btn-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
