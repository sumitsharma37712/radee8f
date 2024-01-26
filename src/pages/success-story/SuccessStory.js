import React, { useState } from "react";
import "./SuccessStory.css";
import "../../components/HomeSlider/HomeSlider.css";
// import symantic from "../../assets/images/symantec.jpg.webp";
import endu from "../../assets/images/endu.jpg.webp";
import cysiv from "../../assets/images/cysiv.jpg.webp";
import krista from "../../assets/images/Krista-logo-transparent-312-128-2_b63870c5-8e05-4078-b7db-986a926de2ab.png";
import symantec from "../../assets/images/symantec.jpg.webp";
import forescout from "../../assets/images/forescout.png";
import CaretRight from "../../assets/images/next.png";
import CaretTop from "../../assets/images/topup.png";
// import

// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const SuccessStory = () => {
  const testimonial = [
    {
      id: "1",
      image: forescout,
    },
    {
      id: "2",
      image: endu,
    },
    {
      id: "3",
      image: symantec,
    },
    {
      id: "4",
      image: cysiv,
    },
    {
      id: "5",
      image: krista,
    },
  ];
  const successContent = [
    {
      id: "1",
      image: forescout,
      description:
        "Forescout, a cybersecurity firm, expanded its operations in Pune, India, partnering with Radee8 Advisory for a virtual work-from-home team and physical office space in a co-working environment. Radee8 facilitated the establishment of a secure virtual team, ensuring seamless collaboration and security. The Radee8 also managed the physical office setup, ensuring a flexible workspace in a prime business district of Pune. ",
      discription1:
        "Radee8 also managed IT infrastructure services, including procurement of IT equipment and a robust delivery mechanism across India. Radee8 also facilitated the integration of Forescout's leadership into the Indian business landscape, finding the right talent for managing operations. The Radee8 also handled GST filing and tax compliance, making GST filings a hassle-free task. The partnership between Forescout and Radee8 became a benchmark for international companies venturing into India's dynamic market.",
    },

    // {
    //   id: "2",
    //   image:
    //   symantic,
    //   description:"",
    // },
  ];

  // " Forscout is one the market leader's in the cyber security domain, Radee8 was able to help forscout resturcture their business oprations, optimize on workflows by offering more comprehensive solutions, Forscout was able to expand into a much larger marketplace. Forscout is a great example of Radee8's experience and strategy, giving Forscout a competitive edge. This strategic intervention not only bolstered Forscout's existing capabilities but also positioned them to navigate the dynamic cybersecurity terrain with enhanced resilience. The result was a significant expansion of Forscout's footprint into a much larger marketplace, a testament to the effectiveness of Radee8's holistic approach.Forscout's success story underlines Radee8's profound expertise and forward-thinking strategy. The partnership not only addressed immediate challenges but also equipped Forscout with a sustainable competitive edge in an industry characterized by relentless innovation and evolving threats. Forscout's trajectory, marked by growth and adaptability, exemplifies the impact of Radee8's experience and strategic acumen on companies striving for excellence in the cybersecurity domain."

  // " Radee8 played a pivotal role in revolutionizing Symantec's approach to data-centric security and compliance, successfully tackling intricate challenges with unparalleled expertise. Through our collaborative efforts, we crafted innovative, customized solutions that propelled Symantec beyond the constraints of conventional cybersecurity frameworks.Our partnership with Symantec marked a significant turning point, as the organization seamlessly embraced cutting-edge technologies and methodologies. The result was not merely overcoming challenges but a transformative upgrade that positioned Symantec as a trailblazer in the dynamic and ever-evolving realm of cybersecurity.Radee8's commitment to excellence, combined with Symantec's forward-thinking approach, culminated in a success story where intricate problems were not only solved but served as stepping stones for continuous improvement. This collaboration stands as a testament to the power of innovation and strategic thinking in fortifying organizations against the relentless tide of cyber threats. Symantec's journey with Radee8 exemplifies the synergy between advanced technology solutions and proactive cybersecurity strategies, setting a benchmark for the industry as a whole."

  const [togle, setToggle] = useState(true);
  function toggle() {
    setToggle(!togle);
  }
  const pagination = {
    clickable: true,
  };
  return (
    <div className="success-story">
      <div className="SuccessStoryheader">
        <h2>Success Stories</h2>
        <p>
          Radee8 prides itself on being one of the most client-centric
          companies. Over the years, we have helped a lot of businesses achieve
          their full potential through our collaboration and consultancy. We
          would love to share some of our success stories, and we look forward
          to helping you in your transformative journey.
        </p>
      </div>

      <div className="successStoryBody">
        
        
            <div className=" successStoryContent">
              <div className="sscontentImage" >
                <div>
                  <img src={forescout} alt="not found" />
                </div>
              </div>
              <div className="sscontent">
                <p className="p1">
                <span style={{fontWeight:"600"}}>Client Overview</span>: Forescout, a leading player in the cybersecurity sector, envisioned expanding its operations to Pune, India to tap into the country's burgeoning talent pool and enhance its global operations. Seeking a strategic partner, Forescout collaborated with Radee8 Advisory, well established advisory firm known for its expertise in international business setups. 
<br/>The objective was to set up a virtual work-from-home team for Forescout's India operations and create a physical office space in a co-working environment.
<br/>Forescout needed local expertise to support them in navigating Indian regulatory requirements, IT infrastructure and equipment procurement, Compliance with compliance with Indian taxation laws, GST filing,  Identifying and establishing a presence in a suitable co-working space etc.

<br/><span style={{fontWeight:"600"}}>Entity Establishment </span>: Conducted a thorough market analysis to identify the most suitable location for Forescout’s operations in India. This encompassed the entire process from name registration to navigating the legal landscape.
<br/><span style={{fontWeight:"600"}}>Fiduciary Services </span>: To ensure a strong local presence, Radee8 carefully selected and appointed local directors in alignment with Indian regulations, providing Forescout with the necessary expertise on the ground. 
<br/><span style={{fontWeight:"600"}}>Accounting and Compliance Services </span>: Radee8 took charge of Forescout's financial framework, implementing robust accounting systems while keeping a vigilant eye on compliance with Indian accounting standards.
<br/><span style={{fontWeight:"600"}}>Virtual Team Setup </span>	: Radee8 Advisory spearheaded the establishment of virtual work from home team. This involved the implementation of secure communication tools, ensuring that remote employees could collaborate seamlessly.
Security measures were implemented to safeguard Forescout's sensitive information, and the virtual team was set up to mirror the efficiency and productivity of an in-office environment.
<br/><span style={{fontWeight:"600"}}>Physical office setup</span>: Radee8 facilitated the establishment of a dynamic and flexible workspace in a premium co-working space (in prime business district of Pune), accommodating Forescout’s initial team. This approach allowed for scalability as the team expanded. 
For physical set up in a co-working space, Radee8 Advisory identified the selection of suitable location, negotiated lease agreements, and managed the interior set up, IT Infrastructure to meet Forescout’s specifications.
A collaborative work environment was created, promoting employee well-being and fostering a sense of community among the team.
<br/><span style={{fontWeight:"600"}}>IT Infrastructure Services </span>: Radee8 managed the entire spectrum of IT infrastructure services. This included the procurement of IT equipment and the establishment of a robust delivery mechanism across India, ensuring that Forescout's team had the necessary tools for seamless operations, promoting efficiency and security.
<br/><span style={{fontWeight:"600"}}>Leadership and SOC Establishment </span>:  Radee8 facilitated the smooth integration of Forescout's leadership into the Indian business landscape by finding out the right talent for Forescout to manage India operations. This included cultural orientation and strategic guidance to ensure effective leadership within the newly established SOC.
<br/><span style={{fontWeight:"600"}}>GST Filing and Tax Compliance </span> -Managing Goods and Services Tax (GST) filings became a hassle-free task under Radee8's guidance, as the advisory firm handled the complexities of India's taxation framework.
<br/>
Forescout seamlessly blended into the local business ecosystem, meeting the regulatory standards and boasting a formidable team. The successful partnership between Forescout and Radee8 became a benchmark for international companies venturing into India’s dynamic market. 


                </p>
                <p className="pop"></p>
                {togle && <p className="p2">
                  
                  </p>}
                <Link to="" onClick={toggle}>
                  Read {togle ? "less" : "more"}&nbsp;&nbsp;
                  <img
                    src={togle ? CaretTop : CaretRight}
                    alt="Read more"
                  ></img>
                </Link>
              </div>
            </div>
            
      </div>
      <div>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={pagination}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonial.map((i) => {
            return (
              <>
                <SwiperSlide>
                  <div className="inner-testimonial-image">
                    <img src={i.image} alt="a" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
