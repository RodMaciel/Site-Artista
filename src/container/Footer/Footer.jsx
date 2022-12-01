import React from 'react';
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook,FiTwitter,FiInstagram } from 'react-icons/fi'
import { images } from '../../constants';


import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Entre em contato</h1>
        <p className="p__opensans">Jardim Maria Helena - Barueri/SP</p>
        <p className="p__opensans">+55 11 9999-9999</p>
        <p className="p__opensans">+55 11 9999-9999</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.geni} alt="footer_logo" />
        <p className="p__opensans">
          Um artista é um sonhador que consente em sonhar o mundo real.
        </p>
        <img
          src={images.iconpin2}
          alt="pincel"
          className="pincel_img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Horarios</h1>
      <p className="p__opensans">Segunda/Sexta-feiras:</p>
      <p className="p__opensans">6:00 Às 18h</p>
      <p className="p__opensans">Sábados:</p>
      <p className="p__opensans">7:00 Às 13h</p>
    </div>
    </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Rodrigo Maciel. Todos Direitos Reservados.
      </p>
    </div>
  </div>
);

export default Footer;
