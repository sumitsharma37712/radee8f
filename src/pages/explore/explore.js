import React, { useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
const ExploreServices = () => {
  const [change, SetChange] = useState(null);
  const [innerChange, setInnerChange] = useState(null);

//   const openContainer = (item) => {
//     if (change === item) {
//       return SetChange(null);
//     }
//     SetChange(item);
//   };
  const openInnerContainer = (li) => {
    if (innerChange === li) {
      return setInnerChange(null);
    }
    setInnerChange(li);
  };

  return (
    <div className="exploreServices"data-aos="fade-up" data-aos-duration="500">
      <div className="container"data-aos="fade-up" data-aos-duration="500">
          {exploreapi.map((i, item) => {
            return (
              <div className="column exploreHeading" id={`exploreHeading${item}`} data-aos="fade-up" data-aos-duration='1000'>
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
                      id={`exploreHeadingInner${li}-${item}`} data-aos="fade-up" data-aos-duration="1500">
                        <h4
                          style={{ cursor: "pointer" }}
                          onClick={() => openInnerContainer(li)}
                          id={item}
                        >
                          <div className="innercontain"data-aos="fade-up" data-aos-duration="1200">
                            <span
                              className={innerChange === li ? "low" : "side"}
                            >
                              <MdArrowDropDown />
                            </span>
                            <li style={{ listStyle: "none" }} data-aos="fade-up" data-aos-duration="2000">
                              {l.innerhead}
                              
                            </li>
                          </div>
                        </h4>

                        <div  id={`${li}`}>
                          {l.discription.map((des, index) => {
                            return (
                              <>
                                <div id={`innerdiscription${index}`}data-aos="fade-up" data-aos-duration="1000">
                                  <ul
                                    className={
                                      innerChange === li ? "show" : "hide"
                                    }
                                  >
                                    <li data-aos="fade-up" data-aos-duration="500"><b>{des.descriptionhed}</b>  {des.description1}</li>
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
