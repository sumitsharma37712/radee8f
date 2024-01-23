import React, { useEffect, useState } from 'react';
import './scrollimg.css'
import ElasticImage from "../../assets/images/elastic.png";

const ScrollWidthChange = () => {
    const [width, setWidth] = useState(1000);

    const changeWidth = () => {
        const scroll = window.scrollY /10;
        const newWidth = Math.min(400 - scroll, 1000);

        // Corrected code: Use getElementById to get a single element
        const teamworkElement = document.getElementById("teamwork");
        if (window.scrollY>0) {
            teamworkElement.style.width = newWidth + '%';
        }
        setWidth(newWidth);
    };

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(changeWidth);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <>
            <div className='row teamworkmain' style={{margin:"0rem"}}>
                <div className='row team2' style={{margin:"0rem"}}>
                    <div className="column state" style={{minWidth:`${width}`}} id='teamwork'>
                        <img src={ElasticImage} alt="Elastic" width="100%"></img>
                    </div>

                    <div className="column column-contents">
                        <div className="inner">
                            <h3 data-aos="fade-in" data-aos-duration="1000">
                                Sculpting Success with Comprehensive Approach
                            </h3>
                            <p data-aos="fade-in" data-aos-duration="1500">
                                Radee8 is not just a service provider, we are artisans of
                                management.
                            </p>
                            {/* {togle && ( */}
                            <p>
                                We have a proven record with diverse set of Clients'. Radee8
                                offers tailor made solutions to businessess facing multitude
                                challenges in today's dynamic world.
                            </p>
                            {/* )} */}
                            {/* <Link to="" onClick={toggle}>
                Read {togle ? "less" : "more"}&nbsp;&nbsp;
                <img src={CaretRight} alt="Read more"></img>
              </Link> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ScrollWidthChange;
