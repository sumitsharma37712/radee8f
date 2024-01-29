import React from "react";
// Style
import "./Services.css";

import { NavHashLink } from "react-router-hash-link";
import servicesapi from "./servicesapi";
import { useEffect } from "react";

const Services = () => {
  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behavior:"auto",
    });
  }


  useEffect(() => {
    localStorage.clear();
  });
  const sendId = (id) => {
    localStorage.setItem("id", JSON.stringify(id));
    console.log("data", id);
  };

  return (
    <>
      <div>
        <div className="container service-section" data-aos="fade-up">
          <div className="sectionHead row">
            <h1 data-aos="flip-left">Our Services</h1>
            <p>
              Our services offer your organization cost optimization, access to
              a global talent pool, and diverse perspectives on business issues.
              Our services involves collaboration across borders, leveraging
              technology to facilitate communication and project management.
              Take advantage of business process improvement and restructuring,
              market research, or digital transformation. Our management
              consultancy contribute significantly to a company's growth and
              success in the global marketplace.
            </p>
          </div>

          {servicesapi.map((service, item) => {
            const { id, id2, headding, image, description, link } = service;

            return (
              <>
                <div className="serviceBody row" id={id2} key={id}>
                  <h3 className="show-on-mobile" data-aos="fade-up">
                    {headding}
                  </h3>

                  <div className="column column-40" data-aos="fade-right">
                    <img src={image} alt="" />
                  </div>
                  <div className="column column-60" data-aos="fade-left">
                    <div>
                      <h3 className="hide-on-mobile">{headding}</h3>
                      <p>{description}</p>
                    </div>
                    <div>
                      <NavHashLink
                        to={link}
                        scroll={(el) => {
                          const yOffset = -400;
                          const y =
                            el.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }}
                        onClick={() => sendId(id)}
                      >
                        <button className="exploreBtn" onClick={scroll_to_Top}>Explore</button>
                      </NavHashLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
