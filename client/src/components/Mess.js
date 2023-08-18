import React from 'react'
import '../css/messdetails.css'
import simg from '../img/mess.jpg'
import wadapav from "../img/wadapav.jpg";
import tea from "../img/tea.jpg";
import upma from "../img/upma.jpg";
import coffee from "../img/coffee.jpg";
import idli from "../img/idli.jpg";
import pattice from "../img/pattice.jpg";
import pohe from "../img/pohe.jpg";
import samosa from "../img/samosa.jpg";
import milk from "../img/milk.jpg";



const Mess = () => {


  // const [slideshow,setslide]=useState(true);

  // let slideIndex = 1;
  // showSlides(slideIndex);


  // function plusSlides(n) {
  //     slideIndex += n;
  //     showSlides(slideIndex);

  // }


  // function showSlides(n) {
  //     let i;
  //     let slides = document.querySelector("img-container");

  //     if (n > slides.length) { slideIndex = 1 }
  //     if (n < 1) { slideIndex = slides.length }
  //     for (i = 0; i < slides.length; i++) {
  //         slides[i].style.display = "none";
  //     }

  //     slides[slideIndex - 1].style.display = "block";



  return (
    <>
      <section>
        <div>
          <h1>PICT MESS/CANTEEN</h1>
        </div>


        <div className=" container">
          <img src={simg} alt="img-1" className="slide"></img>

          {/* <div className="img-container">
              <div className="slide-no">1/3</div>
              <img src={simg} alt="img-1" className="slide"></img>
            </div>
            <div className="img-container">
              <div className="slide-no">2/3</div>
              <img src={simg} alt="img-1" className="slide"></img>
            </div>
            <div className="img-container">
              <div className="slide-no">3/3</div>
              <img src={simg} alt="img-1" className="slide"></img>
            </div> */}
          {/* <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
                    <a className="next" onclick={plusSlides(1)}>&#10095;</a> */}
        </div>

        <div>
          <div className="today-menu">
            <h2>Today's Menu</h2>
          </div>
          <center>
            {" "}
            <hr />{" "}
          </center>
          <div className="menu-container">
            <div className="lunch">Lunch (Time: 12-3 pm)</div>

            <div className="dinner">Dinner (Time: 7-10pm)</div>
            <div className="vertical"></div>
          </div>
        </div>
        <div className="outer-grid">
          <h3 className="snack-text">Snacks</h3>
          <div className="grid-container">
            <div className="grid-item">
              <div className="snack-img">
                <img src={samosa} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Samosa</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={wadapav} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Wada Pav</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={idli} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Idli Sambar</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={pohe} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Pohe</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={upma} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Upma</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={pattice} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Pattice</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={tea} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Tea</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={milk} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Milk</div>
            </div>
            <div className="grid-item">
              <div className="snack-img">
                <img src={coffee} alt=""></img>
              </div>
              <div style={{ fontsize: "31px;" }}>Coffee</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Mess;