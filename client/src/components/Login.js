import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginPage.css";
import "../css/footer.css"

let newEmail;

const Login = ({ email, setEmail, password, setPassword }) => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("https://hostelportalpblsem4.herokuapp.com/userlogin", {
      method: "POST",
      mode: 'cors',
      // credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log('Response:', res);
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials!");
    } else {
      window.alert("Login Successful!");
      console.log('DATA', data);
      console.log(email, password);

      newEmail = email;
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="loginContainer">
        <form method="POST">
          <h2 className="text-center title">Login Here</h2>

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="inputFields"
            id="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="inputFields"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* <div className="fields text-center">
            <input type="checkbox" />
            <span className="rememberMe">Remember me</span>
            <a
              href="/"
              className="text-align-right forgotPwd"
              onClick={forgetClick}
            >
              Forgot Password?
            </a>
          </div> */}

          <div className="container">
            <button
              name="login"
              className="btn align-items-center text-center"
              id="btn"
              type="submit"
              onClick={loginUser}
            >
              <p id="btnText">Login</p>
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

export const newemail = newEmail;
export default Login;
