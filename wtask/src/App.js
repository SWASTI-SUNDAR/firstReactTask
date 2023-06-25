import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../src/1.jpg"
import logo2 from "../src/2.png"
import logo3 from "../src/3.png"
import logo4 from "../src/4.jpg"
import logo5 from "../src/5.jpg"
import logo6 from "../src/6.jpg"
import "./style.css"
function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div>
          <div className="container">

            <div className="card">

              <div className="slide slide1">

                <div className="content">

                  <div className="icon">

                    <img src={logo1} alt="" />

                  </div>

                </div>

              </div>

              <div className="slide slide2">

                <div className="content">

                  <h3>
                    Stephen Jonshon
                  </h3>
                  <h5>Web Devloper</h5>
                  <span>
                  skills:-Html,css,js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">

            <div className="card">

              <div className="slide slide1">

                <div className="content">

                  <div className="icon">

                    <img src={logo1} alt="" />

                  </div>

                </div>

              </div>

              <div className="slide slide2">

                <div className="content">

                  <h3>
                  Brian Kernighan.
                  </h3>
                  <h5>Game Devloper</h5>
                  <span>
                  skills:-Html,css,js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">

            <div className="card">

              <div className="slide slide1">

                <div className="content">

                  <div className="icon">

                    <img src={logo2} alt="" />

                  </div>

                </div>

              </div>

              <div className="slide slide2">

                <div className="content">

                  
                <h3>
                Guido van Rossum.
              </h3>
              <h5>Web Designer</h5>
              <span>
              skills:-Figma,illustrator
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="container">

          <div className="card">

            <div className="slide slide1">

              <div className="content">

                <div className="icon">

                  <img src={logo3} alt="" />

                </div>

              </div>

            </div>

            <div className="slide slide2">

              <div className="content">

               
              <h3>
              Anders Hejlsberg.
            </h3>
            <h5>Open Source</h5>
            <span>
            skills:-React,bootstrap
            </span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="container">

            <div className="card">

              <div className="slide slide1">

                <div className="content">

                  <div className="icon">

                    <img src={logo4} alt="" />

                  </div>

                </div>

              </div>

              <div className="slide slide2">

                <div className="content">

                 
                <h3>
                James Gosling.
              </h3>
              <h5>App Devloper</h5>
              <span>
              skills:-c++,java
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>;




    </>
  )
}

export default App;
