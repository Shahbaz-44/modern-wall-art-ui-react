import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import profile1 from "../../assets/Images/testimonial01.jpg";
import profile2 from "../../assets/Images/testimonial04.jpg";
import profile3 from "../../assets/Images/testimonial03.jpg";
import profile4 from "../../assets/Images/testimonial02.jpg";

const testimonials = [
  {
    id: 1,
    image: profile1,
    name: "Shinty Marisa",
    role: "CUSTOMER SUCCESS",
    location: "Singapore",
  },
  {
    id: 2,
    image: profile2,
    name: "Madeleine Thompson",
    role: "CUSTOMER SUCCESS",
    location: "Australia",
  },
  {
    id: 3,
    image: profile3,
    name: "Barry Butler",
    role: "IMAGE CURATION",
    location: "Singapore",
  },
  {
    id: 4,
    image: profile4,
    name: "Simon Partridge",
    role: "BUSINESS DEVELOPMENT",
    location: "Singapore",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          loop={true}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">

                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <h5>{item.role}</h5>

                <p>{item.location}</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonial;