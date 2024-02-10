import React from "react";
import "./Footer.css";
import InstagramIcon from "../../assets/instagram.png";
import GmailIcon from "../../assets/gmail.png";
import WhatsappIcon from "../../assets/whatsapp.png";

const Footer = () => {
  const wa_number = "+91 8438448943";
  const wa_message = "Hi Ranjith Kumar, can we connect?";

  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
      <div className="map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.2360099409702!2d76.9382475!3d11.095780200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f732ab0d727d%3A0xfdf6041a52af09d7!2sMETAL%20MUSCLE%20FITNESS!5e0!3m2!1sen!2sin!4v1701851905219!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br/>
        <div className="social-links">
          <a href="https://instagram.com/metal_muscle_fitness?igshid=OGQ5ZDc2ODk2ZA===">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="mailto:metalmusclefitness@gmail.com">
            <img src={GmailIcon} alt="Gmail" />
          </a>
          <a href={`https://wa.me/${wa_number}?text=${encodeURIComponent(wa_message)}`}>
            <img src={WhatsappIcon} alt="WhatsApp" />
          </a>
        </div>
        <div className="footer-content">
         
          <div className="logo-f">
            <center>
              <h2>METAL MUSCLE FITNESS</h2>
              <h6>2nd Floor, SNT Complex, Murugan Nagar, Thoppampatti,</h6>
              <h6>Coimbatore-641017</h6>
              <h5><b>Contact-8438448943</b></h5>
            </center>
          </div>
          <div className="left-jr">
        <hr />
          <div> &copy; Designed & Developed By Dazzlers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
