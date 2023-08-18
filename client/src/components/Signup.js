import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";
import "../css/footer.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    userid: "",
    gender: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  let name, value; // name attribute and its value

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      fullname,
      email,
      userid,
      gender,
      mobile,
      password,
      confirmPassword,
    } = user;

    const res = await fetch(
      "https://hostelportalpblsem4.herokuapp.com/register",
      {
        // post url in auth.js
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin':  'http://127.0.0.1:3000'
        },
        body: JSON.stringify({
          fullname,
          email,
          userid,
          gender,
          isAdmin: "F",
          mobile,
          password,
          confirmPassword,
        }),
      }
    );
    console.log(res);
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration!");
      console.log("Invalid Registration!");
      console.log(data);
    } else {
      window.alert("Registration Successful!");
      console.log("Registration Successful!");

      navigate("/login"); // login page after registration
    }
  };
  return (
    <>
      <div className=" signupContainer">
        <form method="POST">
          <h2 className="text-center title">Register Here</h2>

          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            className="inputFields"
            id="fullname"
            required
            value={user.fullname}
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Email id"
            name="email"
            className="inputFields"
            id="email"
            required
            value={user.email}
            onChange={handleInput}
          />

          <input
            type="text"
            placeholder="Registration ID"
            name="userid"
            className="inputFields"
            id="userid"
            required
            value={user.userid}
            onChange={handleInput}
          />
          <div className="gender d-flex">
            <div className="form-check male text-center">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="M"
                id="male"
                onChange={handleInput}
              />
              <label className="form-check-label text-center" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check female">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="F"
                id="female"
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile"
            className="inputFields"
            id="mobile_no"
            required
            value={user.mobile}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="inputFields"
            id="password"
            required
            value={user.password}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="inputFields"
            id="confirmpassword"
            required
            value={user.confirmPassword}
            onChange={handleInput}
          />

          <div className="container">
            <button
              type="submit"
              name="signup"
              className="btn align-items-center text-center"
              id="signupBtn"
              onClick={postData}
            >
              <p id="btnText">Submit</p>
              <div className="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-3 bg-dark text-white-50"
      >
        <div className="container text-center footerarea">
          <small id="copyrighttext">Copyright &copy; PICT Hostel</small>
        </div>
      </footer>
    </>
  );
};

export default Signup;
