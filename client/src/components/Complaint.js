import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
import "../css/complaint.css";
const SERVICE_ID = "service_xv6od9i";
const TEMPLATE_ID = "template_2aayioc";
const USER_ID = "g8RC_NWbZIF5RPpdc";

const Complaint = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Complaint sent succesfully");
      }, (error) => {
        console.log(error.text);
        alert("Oops something went wrong");

      });
    e.target.reset()
  };
  return (
    <section><h1>COMPLAINT FORM</h1>

      <div className="container5">
        <form onSubmit={handleOnSubmit} id="cform" >
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your name.. " className="ip" required />

          <label for="email">E-mail ID</label>
          <input type="email" id="e-mail" name="e-mail" placeholder="Your E-mail ID.." className="ip" required />

          <label for="room_no">Room Number</label>
          <input type="text" id="room_no" name="room_no" placeholder="Enter your room number.." className="ip" required />
          <label for="subject">Complaint</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} className="ip" required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default Complaint;