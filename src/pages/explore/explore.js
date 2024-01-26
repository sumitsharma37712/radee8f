import React, { useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
const ExploreServices = () => {
  const [change, setChange] = useState(null);
  const [innerChange, setInnerChange] = useState(false);

  const openInnerContainer = (l) => {
    if (innerChange === l.id) {
      return setInnerChange(innerChange);
    } else if (innerChange === l) {
      return setInnerChange(null);
    }
    setInnerChange(l);
  };

  return (
    <div className="exploreServices" data-aos="fade-up" data-aos-duration="500">
      <div className="container" data-aos="fade-up" data-aos-duration="500">
        {exploreapi.map((i, item) => {
          return (
            <div
              className="column exploreHeading"
              id={`exploreHeading${item}`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3
              //   onClick={() => openContainer(item)}
              >
                <span className={change === item ? "side" : "low"}>
                  <MdArrowDropDown />
                </span>
                {i.mainhead}
              </h3>

              {i.innerHead.map((l, li) => {
                return (
                  <>
                    <div
                      className={`exploreHeadingInner ${
                        change === li ? "hide" : "show"
                      } `}
                      id={`exploreHeadingInner${l.id}`}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      onClick={() => openInnerContainer(l.id)}
                    >
                      <h4 style={{ cursor: "pointer" }} id={item}>
                        <div
                          className="innercontain"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                        >
                          {/*innear heading image  */}
                          <span
                            className={innerChange === l.id ? "low" : "side"}
                          >
                            <MdArrowDropDown />
                          </span>
                          <li
                            style={{ listStyle: "none" }}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                          >
                            {l.innerhead}
                          </li>
                        </div>
                      </h4>

                      {/* inner description */}
                      <div id={`${li}`}>
                        {l.discription.map((des, index) => {
                          return (
                            <>
                              <div
                                id={`innerdiscription${index}`}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                              >
                                <ul
                                  className={
                                    innerChange === l.id ? "show" : "hide"
                                  }
                                >
                                  <li
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                  >
                                    <b>{des.descriptionhed}</b>{" "}
                                    {des.description1}
                                  </li>
                                </ul>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreServices;
