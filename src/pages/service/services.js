import React, { useEffect, useRef, useState } from "react";
// Style
import "./service.css";
import R from '../../assets/images/R.png'
import A from '../../assets/images/A.png'
import D from '../../assets/images/D.png'
import E from '../../assets/images/E.png'
import E8 from '../../assets/images/8.png'

const Service = () => {
  const [scrollR, setScrollR] = useState(0);
  const [scrollA, setScrollA] = useState(0);
  const [scrollD, setScrollD] = useState(0);
  const [scrollE, setScrollE] = useState(0);
  const [scrollE1, setScrollE1] = useState(0);
  const [scroll8, setScroll8] = useState(0);



  // R
  const changeWidth = () => {
    const scroll = window.scrollY / 100;
    console.log(scroll)
    setScrollR(scroll);
  };
  const textboxRef = useRef(null);
  const letterpartRef = useRef(null);

  const changeBox = () => {
    const textbox = textboxRef.current;
    const letterpart = letterpartRef.current;

    if (letterpart.style.transform < 'scale(1.5)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
    // textbox.style.display = letterpart.style.transform >= 'scale(1.3)' ? 'none' : 'block';
  };


  // A
  const textboxRefA = useRef(null);
  const letterpartRefA = useRef(null);
  const changeWidthA = () => {
    const scroll = window.scrollY / 900;
    console.log(scroll)
    setScrollA(scroll);
  };
  const changeBoxa = () => {
    const textbox = textboxRefA.current;
    const letterpart = letterpartRefA.current;

    if (letterpart.style.transform < 'scale(1)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
  };
  // D

  const textboxRefD = useRef(null);
  const letterpartRefD = useRef(null);
  const changeWidthD = () => {
    const scroll = window.scrollY / 1600;
    console.log(scroll)
    setScrollD(scroll);
  };
  const changeBoxd = () => {
    const textbox = textboxRefD.current;
    const letterpart = letterpartRefD.current;

    if (letterpart.style.transform < 'scale(1)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
  };
  // E

  const textboxRefE = useRef(null);
  const letterpartRefE = useRef(null);
  const changeWidthE = () => {
    const scroll = window.scrollY / 2400;
    console.log(scroll)
    setScrollE(scroll);
  };
  const changeBoxe = () => {
    const textbox = textboxRefE.current;
    const letterpart = letterpartRefE.current;

    if (letterpart.style.transform < 'scale(1)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
  };

  // EE
  const textboxRefE1 = useRef(null);
  const letterpartRefE1 = useRef(null);
  const changeWidthE1 = () => {
    const scroll = window.scrollY / 3100;
    console.log(scroll)
    setScrollE1(scroll);
  };
  const changeBoxe1 = () => {
    const textbox = textboxRefE1.current;
    const letterpart = letterpartRefE1.current;

    if (letterpart.style.transform < 'scale(1)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
  };
  const textboxRef8 = useRef(null);
  const letterpartRef8 = useRef(null);
  const changeWidth8 = () => {
    const scroll = window.scrollY / 3900;
    console.log(scroll)
    setScroll8(scroll);
  };
  const changeBox8 = () => {
    const textbox = textboxRef8.current;
    const letterpart = letterpartRef8.current;

    if (letterpart.style.transform < 'scale(1)') {
      textbox.style.display = 'none';
      letterpart.style.display = 'block';
    } else {
      textbox.style.display = 'block';
      letterpart.style.display = 'none';
    }
  };




  useEffect(() => {
    const handleScroll = () => {
      // R
      requestAnimationFrame(changeWidth);
      requestAnimationFrame(changeBox);
      // A
      requestAnimationFrame(changeWidthA);
      requestAnimationFrame(changeBoxa);
      // D
      requestAnimationFrame(changeWidthD);
      requestAnimationFrame(changeBoxd);
      // E
      requestAnimationFrame(changeWidthE);
      requestAnimationFrame(changeBoxe);
      // EE
      requestAnimationFrame(changeWidthE1);
      requestAnimationFrame(changeBoxe1);
      // 8
      requestAnimationFrame(changeWidth8);
      requestAnimationFrame(changeBox8);

    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>

      <div>
        {/* R */}
        <div className="service-section" data-aos="fade-up">
          <div className="row sectionR">
            <div className="letterPart" ref={letterpartRef} style={{ transform: ` scale(${scrollR}` }}>
              <img className="" src={R} alt='R text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRef} style={{ display: 'none' }}>
              <div className="textR">
                <h1>Radical</h1>
                <p>Welcome to the Innovation Hub at Radee8 – a dedicated space where creativity meets strategy, and ideas transform into groundbreaking solutions. Here, we push the boundaries of conventional thinking, leveraging cutting-edge technologies and visionary approaches to shape the future of global businesses.</p>
              </div>
            </div>
          </div>
        </div>
        {/* A */}
        <div className="service-section" data-aos="fade-up">
          <div className="row sectionA">
            <div className="letterPart" ref={letterpartRefA} style={{ transform: ` scale(${scrollA}` }}>
              <img className="" src={A} alt='A text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRefA} style={{ display: 'none' }}>
              <div className="textA">
                <h1>agile</h1>
                <p>Futuristic Technologies: Embark on a journey through the latest technological frontiers. From AI and machine learning to blockchain and beyond, we explore, innovate, and integrate these advancements into your business strategy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* D */}
        <div className="service-section" data-aos="fade-up">
          <div className="row sectionD">
            <div className="letterPart" ref={letterpartRefD} style={{ transform: ` scale(${scrollD}` }}>
              <img className="" src={D} alt='D text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRefD} style={{ display: 'none' }}>
              <div className="textD">
                <h1>DISRUPTIVE</h1>
                <p>R&D Initiatives: Dive into our Research and Development initiatives. We thrive on curiosity and continuous learning, driving innovation through projects that challenge the status quo and redefine industry standards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* E */}

        <div className="service-section" data-aos="fade-up">
          <div className="row sectionE">
            <div className="letterPart" ref={letterpartRefE} style={{ transform: ` scale(${scrollE}` }}>
              <img className="" src={E} alt='e text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRefE} style={{ display: 'none' }}>
              <div className="textD">
                <h1>EFFCIENT</h1>
                <p>Prototyping Playground: Step into our Prototyping Playground where ideas come to life. We transform concepts into tangible prototypes, allowing you to visualize and experience the potential of groundbreaking innovations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* E */}

        <div className="service-section" data-aos="fade-up">
          <div className="row sectionE">
            <div className="letterPart" ref={letterpartRefE1} style={{ transform: ` scale(${scrollE1}` }}>
              <img className="" src={E} alt='e text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRefE1} style={{ display: 'none' }}>
              <div className="textD">
                <h1>Energetic</h1>
                <p>Tech Talks and Workshops: Engage in stimulating discussions and hands-on workshops with industry experts. Our Tech Talks provide insights into emerging trends, while workshops offer practical knowledge to empower your team with the latest skills.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}

        <div className="service-section" data-aos="fade-up">
          <div className="row section8">
            <div className="letterPart" ref={letterpartRef8} style={{ transform: ` scale(${scroll8}` }}>
              <img className="" src={E8} alt='e text'></img>
            </div>
            <div className="textbox" id="textbox" ref={textboxRef8} style={{ display: 'none' }}>
              <div className="textD">
                <h1>LIMITLESS</h1>
                <p>5. Collaborative Innovation Spaces: Join forces with other forward-thinking minds in our Collaborative Innovation Spaces. These areas are designed to foster creativity, encourage collaboration, and spark the exchange of ideas that can lead to transformative solutions..</p>
              </div>
            </div>
          </div>
        </div>









      </div>

    </>
  );
};

export default Service;