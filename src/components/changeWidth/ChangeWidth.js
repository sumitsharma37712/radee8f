import React, { useEffect, useRef, useState } from "react";
import "./changeWidth.css";
import ElasticImage2 from "../../assets/images/elastic2.png";
import { Link } from "react-router-dom";
import CaretRight from "../../assets/images/next.png";
import CaretTop from "../../assets/images/topup.png";

const ChangeWidth = () => {
  const ref = useRef(null);
  const main = useRef(null);
  const [togle, setToggle] = useState(false);
  const [approch, setApproch] = useState(false);
  useEffect(() => {
    const element = ref.current;
    const w = main.current;
    const changeWidthid = document.getElementById("changeWidth");
    const changeWidth = () => {
      var scroll = window.scrollY / 5;
      var width = Math.floor(Math.min(900 - scroll));
      console.log(width);
      element.style.width = width + "%";
    };
    if (element.style.width == "61%") {
      element.style.position = "sticky";
      changeWidthid.style.display = "flex";
    }

    window.addEventListener("scroll", function () {
      requestAnimationFrame(changeWidth);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        requestAnimationFrame(changeWidth);
      });
    };
  }, []);
  function toggle() {
    setToggle(!togle);
  }
  function approchbtn() {
    setApproch(!approch);
  }

  return (
    <div className="changeWidth" ref={main} id="changeWidth">
      <div className="containerFull">
        <div className="row flex flex-wrap">
          <div className="expand" ref={ref} id="expand">
            {/* <h2>suraj</h2> */}
            <img src={ElasticImage2} alt="Elastic" width="100%" />
          </div>
          <div className="column-contents expandtext">
            <div>
              <h3>Step into the future, experience the power of Teamwork.</h3>
              <p>
                Radee8 is not just a service provider, we are artisans of
                management.
              </p>
              {approch && (
                <p>
                  Handcrafted solutions that fit right into your product
                  resulting in a well finished rollouts, Radee8 believes in
                  attention to details.
                </p>
              )}
              <Link to="" onClick={approchbtn}>
                Read {approch ? "less" : "more"} &nbsp;&nbsp;
                <img src={approch ? CaretTop : CaretRight} alt="Read more" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeWidth;
