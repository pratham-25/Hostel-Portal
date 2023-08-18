import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import imgpath from "../img/logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import newemail from "./Login";
// import User from "../../../server/model/userSchema";

const Dashboard = ({ email }) => {

  let finalUser, useremail, username, usermobile, userid;
  const navigate = useNavigate([]);
  const [currentUser, setCurrentUser] = useState();
  const callDashboard = async () => {
    // try {
    //   const res = await fetch("/userlogin", {
    //     method: "GET",
    //     headers: {
    //       // Accept: "application/json", // for cookies
    //       "Content-Type": "application/json",
    //     },
    //     // credentials: "include", // for cookies
    //   });

    //   const data = await res.json();
    //   console.log(data);

    //   if (!res.status === 200) {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   navigate("/login");
    // }

    let users;
    try {
      const res = await axios.get("https://hostelportalpblsem4.herokuapp.com/users")
      users = await res.data;
      console.log(users);
      // console.log(currentUser);

      // console.log(email);  

      console.log(users);
      // const finalUser = currentUser.find(({ email }) => email === email);
      finalUser = await users.find((u) => u.email === email)
      console.log(finalUser);
      console.log(finalUser);
      setCurrentUser(finalUser);
      console.log(currentUser);
      useremail = finalUser.email;
      username = finalUser.fullname;
      usermobile = finalUser.mobile;
      userid = finalUser.userid;

      console.log(useremail);
      console.log(username);
      console.log(usermobile);
      console.log(userid);


    } catch (error) {
      console.log(error);
    }
    // axios.get("https://hostelportalpblsem4.herokuapp.com/users")
    //   .then(res => {
    //     users = res.data;
    //     console.log(users);
    //     setCurrentUser(users);
    //     console.log(currentUser);
    //     console.log(email);
    //   })


  };



  useEffect(() => {
    callDashboard();
  }, []);
  useEffect(() => {
    console.log("STATE= ", currentUser)
  }, [currentUser])
  return (
    <>
      <section style={{ backgroundcolor: "#eee" }}>
        <div className="container py-5">


          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4 photo">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: " 150px;" }}
                  ></img>

                  <h5 className="my-3">Student</h5>

                  <div className="d-flex justify-content-center mb-2">

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-8">
              <div className="card mb-4 profile">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser?.fullname}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser?.email}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Registration ID</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser?.userid}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser?.mobile}</p>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Dashboard;