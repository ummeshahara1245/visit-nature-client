import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// কাস্টম অ্যারো বাটন
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="arrow-icon" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="arrow-icon" />
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <div className="testimonial-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-green-600 font-bold uppercase tracking-widest">Testimonials</h6>
          <h2 className="display-5 fw-bold">What Our <span className="text-green-500">Customers</span> Say</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <Slider {...settings}>
              <Card
                img="https://i.ibb.co/bNq0c4D/jhankarmahbub.png"
                name="Jhankar Mahbub"
                role="CEO, Programming Hero"
              />
              <Card
                img="https://i.ibb.co/hLDqZL9/muktadirhassan.jpg"
                name="Muktadir Hassan"
                role="Travel Enthusiast"
              />
              <Card
                img="https://i.ibb.co/9W99fZw/rokydas.jpg"
                name="Roky Das"
                role="Regular Traveler"
              />
              {/* আপনি চাইলে আরও কার্ড এখানে যোগ করতে পারেন */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ img, name, role }) => {
  return (
    <div className="testimonial-card shadow-sm mx-2 my-4 p-4 text-center">
      <div className="quote-icon mb-3">
        <i className="fas fa-quote-left fa-2x text-green-200"></i>
      </div>

      <Avatar
        src={img}
        className="mx-auto mb-3 testimonial-avatar"
        style={{ width: 100, height: 100, border: "4px solid #10b981" }}
      />

      <h5 className="fw-bold mb-1 text-dark">{name}</h5>
      <p className="text-green-600 small mb-3 uppercase">{role}</p>

      <p className="testimonial-text italic text-gray-600">
        "I was amazed by their service quality. Every detail was perfectly managed.
        I highly suggest Visit Nature to anyone who wants a hassle-free traveling experience."
      </p>
    </div>
  );
};

export default Testimonials;