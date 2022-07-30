import React from "react";
import {
  FiPhoneCall,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import "./contactbar.css";
function ContactBar() {
  return (
    <div className="contactBar">
      <div className="social-container">
        <li>
          <a
            href="https://t.me/cricsourav"
            target="_blank"
          >
            <p>
              <FaTelegramPlane />
            </p>
          </a>
        </li>
        <li>
        <a
            href="https://api.whatsapp.com/send?phone=+919749314634"
            target="_blank"
          >
            <p>
              <BsWhatsapp />
            </p>
          </a>
        </li>
        <li>
          <a href="https://m.facebook.com/100036272386951/" target="_blank">
            <p>
              <FiFacebook />
            </p>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <p>
              <FiInstagram />
            </p>
          </a>
        </li>
        
      </div>
    </div>
  );
}

export default ContactBar;
