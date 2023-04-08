import React from "react";
import TopPage from "../../components/TopPage/TopPage";
import "./About.css";

import Image1 from "../../assets/imgs/AboutUs1.png";
import Image2 from "../../assets/imgs/AboutUs2.png";
import Image3 from "../../assets/imgs/AboutUs3.png";
import Image4 from "../../assets/imgs/AboutUs4.png";
import Avatar from "../../assets/imgs/Avatar_1.png";

const About = () => {
  return (
    <div className="about">
      <TopPage
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime incidunt nostrum neque at atque eligendi architecto"
      />

      <div className="about_info d-flex align-items-center container py-5 gap-3">
        <div className="about_info_left">
          <img src={Image1} alt="" className="w-100 h-100" />
        </div>
        <div className="about_info_right d-flex flex-column gap-4">
          <div className="about_info_title fw-bold">
            With Our Experience <br /> We Will Serve You Anytime
          </div>

          <div className="d-flex gap-5">
            <div className="about_info_content_left">
              <p>
                “Maecenas lacinia aliquam metus, id lacinia purus iaculis quis.
                Proin felis. malesuada non ornare nec, egestas sed erat. Nulla
                fermentum orci id est rhoncus sollicitudin.”
              </p>

              <div className="about_info_avatar d-flex align-items-center gap-3">
                <div>
                  <img src={Avatar} alt="" className="w-100 h-100" />
                </div>
                <div className="d-flex flex-column">
                  <p className="fw-bold">Amelia Sharon</p>
                  <p className="about_info_content_text1">Naturfood Founder</p>
                </div>
              </div>
            </div>

            <div className="about_info_content_right">
              <div>
                <p className="about_info_content_text">Our Mission:</p>
                <p>We care about nutrition for your health</p>
              </div>

              <div>
                <p className="about_info_content_text">Our Vision:</p>
                <p>Fastest way to lose weight in natural way</p>
              </div>
            </div>
          </div>

          <div className="about_info_number d-flex justify-content-between align-items-center">
            <div>
              <p className="about_info_number_text">2K+</p>
              <p>Member Active</p>
            </div>

            <div>
              <p className="about_info_number_text">10K+</p>
              <p>Happy Clients</p>
            </div>

            <div>
              <p className="about_info_number_text">35+</p>
              <p>Award Winning</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_middle container py-5 d-flex ">
        <div className="about_middle_left position-relative">
          <p className="about_middle_title">Fresh Produce Every Single Week!</p>
          <p className="about_middle_text">
            Aliquam erat volutpat. Nunc aliquam, felis at euismod posuere, purus
            elit faucibus sem, nec dignissim metus sapien at ante. Sed non
            laoreet risus. Maecenas velit arcu, iaculis et pellentesque non,
            mattis sit amet nisi. Praesent eleifend nisi convallis justo
            dignissim vestibulum. Curabitur finibus tempor diam hendrerit
            placerat
          </p>

          <img src={Image2} alt="" className="about_middle_left_img" />
        </div>
        <div className="about_middle_right">
          <img
            src={Image3}
            alt=""
            className="w-100 h-100 object-fit-cover rounded-5"
          />
        </div>
      </div>

      <div className="about_expert mt-5 p-5">
        <div className=" container d-flex py-5 gap-5 about_expert_container">
          <div className="about_expert_left">
            <p className="about_expert_left_title">Meet Our Expert Team</p>
            <p className="about_expert_left_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
          </div>

          <div className="about_expert_right d-flex justify-content-between gap-5">
            <div className="about_expert_right_item shadow-lg d-flex align-items-center justify-content-center flex-column">
              <img src={Avatar} alt="" />
              <p>James Eric</p>
              <p>Nutritionists</p>
            </div>

            <div className="about_expert_right_item shadow-lg d-flex align-items-center justify-content-center flex-column">
              <img src={Avatar} alt="" />
              <p>James Eric</p>
              <p>Nutritionists</p>
            </div>

            <div className="about_expert_right_item shadow-lg d-flex align-items-center justify-content-center flex-column">
              <img src={Avatar} alt="" />
              <p>James Eric</p>
              <p>Nutritionists</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_sub container py-5 mt-5">
        <div className="about_sub_container d-flex justify-content-between">
          <div className="about_sub_left">
            <p className="about_sub_title">
              Subscribed to Our <br /> Newsletter & Get Benefits
            </p>
            <p className="about_sub_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div>
              <input
                type="email"
                className="field"
                placeholder="Your Email"
                id="email"
              />
              <button className="btn btn-sub">Subcribes</button>
            </div>
          </div>
          <div className="about_sub_right">
            <img src={Image4} alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
