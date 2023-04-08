import React from "react";
import IconFb from "../../assets/icons/IconFb";
import IconInsta from "../../assets/icons/IconInsta";
import IconTwitter from "../../assets/icons/IconTwitter";
import "./Footer.css";

const Footer = () => {
  const footers = [
    {
      title: "OUR SERVICE",
      content: [
        { name: "What’s New" },
        { name: "How to Order" },
        { name: "Payment Method" },
        { name: "Order Status" },
        { name: "Subscription" },
      ],
    },
    {
      title: "OUR TEAM",
      content: [
        { name: "Our Local Farms" },
        { name: "Craftsmanship" },
        { name: "Our Sources" },
        { name: "Sustainability" },
      ],
    },
    {
      title: "LEGAL",
      content: [
        { name: "Privacy Policy" },
        { name: "Our Promise" },
        { name: "More Information" },
      ],
    },

    {
      title: "JOIN OUR NEWSLETTER",
      content: [{ name: "Get the latest updates on our meals." }],
    },
  ];

  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="d-flex footer_top justify-content-between flex-wrap align-items-start">
            {footers.map((item, index) => (
              <div key={index}>
                <p className="footer_title fs-5 fw-bold">{item.title}</p>
                {item.content.map((item, index) => (
                  <p key={index} className="footer_text">
                    {item.name}
                  </p>
                ))}
                {index === footers.length - 1 && (
                  <>
                    <input
                      type="email"
                      className="input_footer"
                      placeholder="Your E-mail Address"
                    />

                    <button className="btn btn-footer mt-3">Submit</button>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="d-flex footer_bottom justify-content-between flex-wrap mt-5">
            <p>Copyright 2021 Chef Norman Meals Co. All Rights Reserved.</p>
            <div className="d-flex gap-3">
              <IconFb />
              <IconInsta />
              <IconTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
