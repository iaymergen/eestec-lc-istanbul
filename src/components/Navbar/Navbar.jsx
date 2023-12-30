import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p className='hover-animation p1'><Link to="/">Ana Sayfa</Link></p>
    <p className='hover-animation p1'><Link to="/about">Hakkımızda</Link></p>
    <p className='hover-animation p2'><Link to="/projects">Etkinliklerimiz</Link></p>
    <p className='hover-animation p3'><Link to="/magazine">Magazin</Link></p>
    <p className='hover-animation p4'><Link to="/team">Ekibimiz</Link></p>
    <p className='hover-animation p5'><Link to="/contact">İletişim</Link></p>
  </>
);

const Menu1 = () => (
  <>
    <p><Link to="/">Ana Sayfa</Link></p>
    <p><Link to="/about">Hakkımızda</Link></p>
    <p><Link to="/projects">Etkinliklerimiz</Link></p>
    <p><Link to="/magazine">Magazin</Link></p>
    <p><Link to="/team">Ekibimiz</Link></p>
    <p><Link to="/contact">İletişim</Link></p>
  </>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='eestec__navbar'>
      <div className='eestec__navbar-links'>
        <div className='eestec__navbar-links_logo'>
          {/* <p>EESTEC LC Istanbul</p> */}
          <img src="./img//logos/BeyazLogo.png" alt="EESTEC LC Istanbul Logo" />
        </div>
        <div className='eestec__navbar-links_container'>
          <Menu />
        </div>

      </div>
      <div className='eestec__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='eestec__navbar-menu_container slide-left'>
            <Menu1 />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
