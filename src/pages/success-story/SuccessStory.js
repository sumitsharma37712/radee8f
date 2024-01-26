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
        {successContent.map((i) => {
          return (
            <div className=" successStoryContent">
              <div className="sscontentImage" key={i.id}>
                <div>
                  <img src={i.image} alt="not found" />
                </div>
              </div>
              <div className="sscontent">
                <p className="p1">{i.description}</p>
                <p className="pop">{i.discription1}</p>
                {togle && <p className="p2">{i.discription1}</p>}
                <Link to="" onClick={toggle}>
                  Read {togle ? "less" : "more"}&nbsp;&nbsp;
                  <img
                    src={togle ? CaretTop : CaretRight}
                    alt="Read more"
                  ></img>
                </Link>
              </div>
            </div>
          );
        })}
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
