import React from 'react'
import "./Footer.css"
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-left">
            <div className="social-media">
            <CiLinkedin />
            <CiFacebook />
            <CiInstagram />
            </div>
        </div>
        <div className="footer-right">
            <h3>Copyright 2024</h3>
        </div>
    </div>
  )
}

export default Footer