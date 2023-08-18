import React from "react";
import "../css/home.css";
import "../css/footer.css";
import imgpath from "../img/logo.jpg";
import hostelimg from "../img/hostelimg.jpeg";
import mess from "../img/mess.jpg";

const Home = () => {
  return (
    <>
      {/* <div className="header d-flex ">
        <img src={imgpath} alt="PICT LOGO" id="logo" />
        <h1 id="clgtitle"> PUNE INSTITUTE OF COMPUTER TECHNOLOGY </h1>
        <div className="text"></div>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>HOSTEL</h2>
            <p>
              The hostel dates back to 1899, after the College came into
              existence in 1854. Initially, it was started as a hostel to house
              the subordinate officers of the Poona Engineering className &
              Mechanical School, for carrying out public works like
              buildings,dams, canals, railways and bridges. Later on, the hostel
              was known as Poona Civil Engineering College Hostel
              and,subsequently in the year 1911, the name was changed to the
              College of Engineering Poona Hostel, popularly known as the COEP
              Hostel.
            </p>
            <img src={hostelimg} alt="PICT Hostel" />
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>MESS</h2>
            <p>The messes at Manipal Institute of Technology are run by the Chef on Wheels. It is one of a kind catering service that offers high quality & cost effective service. Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served. Our priority is to maintain a standard operating procedure, uniformly practiced across various sites with high emphasis on following food safety protocols and compliance with all statutory norms</p>
            <img src={mess} alt="" />
          </div>
        </div>
      </div> */}

      <div className="header d-flex">
        <img src={imgpath} id="logo" />
        <div className="text text-center">
          <h1 id="clgtitle">   PUNE INSTITUTE OF COMPUTER TECHNOLOGY   </h1>
        </div>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>HOSTEL</h2>
            <h5></h5>
            <p>
              The hostel dates back to 1983, after the College came into existence. Initially, it was started as a hostel to house the subordinate officers of the Poona Engineering className & Mechanical School, for carrying out public works like buildings,dams, canals, railways and bridges. Later on, the hostel was known as PICT College Hostel and,subsequently in the year 1911, the name was changed to the Pune Institute of Computer Technology, popularly known as the PICT Hostel.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>MESS</h2>
            <p>The messes at Pune Institute of Computer Technology are run by the Chef on Wheels. It is one of a kind catering service that offers high quality & cost effective service. Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served.</p>
          </div>
        </div>
        <div className="new"><h1> FEATURES </h1></div>
        <div className="card2">


          <h2>BOYS HOSTEL: </h2>
          <hr />
          <p>4 FLOORS</p>
          <p>Total accommodation: 67 Rooms (with double occupancy)</p>
          <p>Allotment will be as follows:</p>
          <p>DISTRIBUTION:</p>
          <p>   FE/SE(Direct)/ME-I	66 students</p>
          <p>   SE	34 students</p>
          <p>   TE  34 students</p>
          <h4>Charges:</h4>
          <p>1) Double occupancy with attached WC: Rs. 1,20,000</p>
          <p>2) Double occupancy with Common WC: Rs. 1,10,000</p>
          <p>3) Refundable Deposit: Rs. 15,000</p>
          <h4>Note:</h4>
          <p>Other facilities like hot water, internet facility, medical officer, hostel mess & canteen, indoor and outdoor sports facilities including gymnasium, 2 wheeler parking, generator back up.</p>
        </div>
        <div className="card2">
          <h2>GIRLS HOSTEL: </h2>
          <hr />
          <p>7 FLOORS</p>
          <p>Total accommodation: 106 Rooms (with double occupancy)</p>
          <p>Allotment will be as follows:</p>
          <p>DISTRIBUTION:</p>
          <p>   FE/SE(Direct)/ME-I	92 students</p>
          <p>   SE	60 students</p>
          <p>   TE  60 students</p>
          <h4>Charges:</h4>
          <p>1) Double occupancy with attached WC: Rs. 1,20,000</p>
          <p>2) Double occupancy with Common WC: Rs. 1,10,000</p>
          <p>3) Refundable Deposit: Rs. 15,000</p>
          <h4>Note:</h4>
          <p>Other facilities like hot water, elevator, internet facility, medical officer, hostel mess & canteen, indoor and outdoor sports facilities including gymnasium, 2 wheeler parking, generator back up.</p>
        </div>
      </div>

      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-3 bg-dark text-white-50"
      >
        <div className="container text-center">
          <small id="copyrighttext">Copyright &copy; PICT Hostel</small>
        </div>
      </footer>
    </>
  );
};

export default Home;
