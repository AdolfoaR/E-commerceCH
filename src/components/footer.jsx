import React from 'react';
import { Twitter, Facebook, Instagram } from 'react-feather';
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer">
  <p>© 2023 Todos los derechos reservados</p>
  <ul>
    <li>
      <a href="#">
        <Facebook />
      </a>
    </li>
    <li>
      <a href="#">
        <Twitter />
      </a>
    </li>
    <li>
      <a href="#">
        <Instagram />
      </a>
    </li>
  </ul>
</div>
      
    </footer>
  );
};

export default Footer;


  