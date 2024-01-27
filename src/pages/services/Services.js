import React from "react";
// Style
import "./Services.css";
import Entity from "../../assets/images/planning-schedule 2.png";
import Administration from "../../assets/images/work-with-the-best 1.png";
import Accounting from "../../assets/images/stock-broker 1.png";
import Shared from "../../assets/images/best-in-class 1.png";
import Payroll from "../../assets/images/trading 1.png";
import Technical from "../../assets/images/code-version-control 1.png";
import { NavHashLink } from "react-router-hash-link";

const Services = () => {
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
          <div className="serviceBody row" id="Entity">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Entity Setup & Management
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Entity} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">Entity Setup & Management</h3>
                <p>
                  Our experts are here to assist you Manage your organization's
                  setup and post setup services. choose from the wide range of
                  setup management options radee8 has to offer.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading0"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
          <div className="serviceBody row" id="Administration">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Administration & Facilities Management
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Administration} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">
                  Administration & Facilities Management
                </h3>
                <p>
                  Aspects like budgeting and compliance, maintenance and
                  security ensure the efficient functioning of your
                  organisation. Radee8 takes care of s trategic planning, or
                  day-to-day operations, while you can giving you time to focus
                  on other important things.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading1"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
          <div className="serviceBody row" id="Accounting">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Accounting & Taxation
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Accounting} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">Accounting & Taxation</h3>
                <p>
                  We take care of systematic recording, analysis, and reporting
                  of financial transactions, ensuring accurate and transparent
                  financial information. We are also focused on complying with
                  tax regulations, minimizing tax liabilities, and optimizing
                  tax strategies to enhance overall financial efficiency of your
                  organisation.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading2"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
          <div className="serviceBody row" id="Shared">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Shared Human Resources
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Shared} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">Shared Human Resources</h3>
                <p>
                  If managing various aspects of Human Resources are proving to
                  be a challange for your organization, let us take care of this
                  problem for you. we proivde end-to-end Human Resources
                  solutions.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading3"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
          <div className="serviceBody row" id="Payroll">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Payroll Services
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Payroll} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">Payroll Services</h3>
                <p>
                  Payroll Service Management is a crucial aspect of
                  administration, Radee8 has you covered on calculating wages,
                  handling deductions, and ensuring compliance with tax
                  regulations.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading4"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
          <div className="serviceBody row" id="Technical">
            <h3 className="show-on-mobile" data-aos="fade-up">
              Technical & Software Compliance
            </h3>

            <div className="column column-40" data-aos="fade-right">
              <img src={Technical} alt="" />
            </div>
            <div className="column column-60" data-aos="fade-left">
              <div>
                <h3 className="hide-on-mobile">
                  Technical & Software Compliance
                </h3>
                <p>
                  Get us onboard and Radee8 will ensure that your organisation
                  has the highest standerds of safeguarding data, mitigating
                  risks, and promoting efficient operations. Companies often
                  establish protocols, conduct regular audits, and employ
                  monitoring tools to verify and maintain technical and software
                  compliance.
                </p>
              </div>
              <div>
                <NavHashLink
                  to="/explore#exploreHeading5"
                  scroll={(el) => {
                    const yOffset = -400;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  <button className="exploreBtn">Explore</button>
                </NavHashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
