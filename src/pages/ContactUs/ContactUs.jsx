import React from "react";
import TopPage from "../../components/TopPage/TopPage";
import "./ContactUs.css";
import Image4 from "../../assets/imgs/AboutUs4.png";

const ContactUs = () => {
  return (
    <div className="contact_us">
      <TopPage
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime incidunt nostrum neque at atque eligendi architecto"
      />
      <div className="contact">
        <div className="information">
          <div className="info d-flex align-items-center container py-5 gap-3 justify-content-between">
            <div className="info_left">
              <div className="info_title fw-bold">
                Have Questions? <br />
                <p>Lets Get In Touch</p>
              </div>
              <p>
                If you have any questions simply use the following contact
                details.
              </p>
              <div className="info_left_text d-flex flex-column justify-content-between align-items-center">
                <div>
                  <p>Email Address</p>
                  <p className="info_left_text_note">ask@naturfood.com</p>
                </div>
                <div>
                  <p>Phone Number</p>
                  <p className="info_left_text_note">+ (100) 234-5678</p>
                </div>
                <div>
                  <p>Store Address</p>
                  <p className="info_left_text_note">
                    99 Br+oklyn New Street, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="info_right d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-5">
                <div className="info_content">
                  <div className="info_form d-flex flex-column align-items-center gap-3">
                    <div className="info_form d-flex w-100 gap-3">
                      <div className="info_form-group flex-1">
                        <label htmlFor="Firstname">Firstname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Firstname"
                        />
                      </div>
                      <div className="info_form-group flex-1">
                        <label htmlFor="Lastname">Lastname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Lastname"
                        />
                      </div>
                    </div>
                    <div className="info_form d-flex w-100 gap-3">
                      <div className="info_form-group flex-1">
                        <label htmlFor="Phone">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="Phone"
                        />
                      </div>
                      <div className="info_form-group flex-1">
                        <label htmlFor="Email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="Email"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100">
                      <label htmlFor="Cmt">Comments/Questions</label>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-sub">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="map container py-5">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23019354.610184748!2d-1.4159140269279942!3d45.22797607973841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e0b46965126f6d%3A0xfbf9500370644f04!2sMealplana!5e0!3m2!1svi!2s!4v1678687714767!5m2!1svi!2s"
              width="100%"
              height="450px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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

export default ContactUs;
