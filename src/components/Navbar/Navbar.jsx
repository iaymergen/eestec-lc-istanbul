import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p className='hover-animation p1'><a href="#">Ana Sayfa</a></p>
    <p className='hover-animation p1'><a href="#">Hakkımızda</a></p>
    <p className='hover-animation p2'><a href="#">Etkinliklerimiz</a></p>
    <p className='hover-animation p3'><a href="#">Magazin</a></p>
    <p className='hover-animation p4'><a href="#">Ekibimiz</a></p>
    <p className='hover-animation p5'><a href="#">İletişim</a></p>
  </>
)

const Menu1 = () => (
  <>
    <p><a href="#">Ana Sayfa</a></p>
    <p><a href="#">Hakkımızda</a></p>
    <p><a href="#">Etkinliklerimiz</a></p>
    <p><a href="#">Magazin</a></p>
    <p><a href="#">Ekibimiz</a></p>
    <p><a href="#">İletişim</a></p>
  </>
)

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
