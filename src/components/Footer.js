import React from 'react';
import moment from 'moment';

const Footer = (props) => {
  return (
    <footer>
    	Develop & Design By Hasan-Py &copy; Copyright {moment().format("YYYY")}
    </footer>
  )
}

export default Footer;