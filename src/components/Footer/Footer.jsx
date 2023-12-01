import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer className='footer-div'>
      <div className='logos'>
      <Link to="https://www.facebook.com/eestecistanbul/" className='social-media-icon'><FacebookIcon/></Link>
      <Link to="https://www.instagram.com/eestecistanbul/" className='social-media-icon'><InstagramIcon/></Link>
      <Link to="https://www.linkedin.com/company/eestec-lc-istanbul/" className='social-media-icon'><LinkedInIcon/></Link>

      </div>
      <div className="signature">
        EESTEC LC Istanbul
      </div>
    </footer>
  )
}

export default Footer