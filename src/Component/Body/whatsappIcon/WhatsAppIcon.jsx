import React from 'react';
import './whatsapp.css';
import whatsAppImg from './pngwing.com.png'
import { Link } from 'react-router-dom';

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-container">
      <Link
        to="https://api.whatsapp.com/send?phone=9403932659"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsAppImg}
          alt="WhatsApp Icon"
          className="whatsapp-icon"
        />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
