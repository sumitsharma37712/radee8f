import React, { useEffect, useState } from "react";
import "./explore.css";
import { MdArrowDropDown } from "react-icons/md";
import exploreapi from "./exploreapi";
const ExploreServices = () => {
  const [change, setChange] = useState(null);
  const [innerChange, setInnerChange] = useState(false);

  useEffect(() => {
    const getID = JSON.parse(localStorage.getItem("id"));
    console.log(getID);
    setFilter(getID);
  }, []);

  const [filter, setFilter] = useState();
  const openInnerContainer = (l) => {
    if (innerChange === l.id) {
      return setInnerChange(innerChange);
    } else if (innerChange === l) {
      return setInnerChange(true);
    }
    setInnerChange(l);
  };

  return (
    <div className="exploreServices" data-aos="fade-up" data-aos-duration="500">
      <div className=" row container flex-wrap" data-aos="fade-up" data-aos-duration="500">
        {exploreapi
          .filter((k) => k.id == filter)
          .map((i, item) => {
            return (
              <>
              <div
                className="column column-80 exploreHeading"
                id={`exploreHeading${item}` } key={item}
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
                        key={l.id}
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
              <div className="column column-20">
                <div className="fixed">
                  
                <p>Links</p>
                </div>
                
              </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ExploreServices;
