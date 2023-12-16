import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='page'>
      <div className='left-card'>
        <div className="title"><h1>İletişim</h1> <hr /></div>
      </div>
      <div className='contact-box'>
        <p className='contact-content'>If you wish to receive information about future exchanges and events, please send an email to <a className='mail-link contact-content' href="mailto::bc.eestecistanbul@gmail.com">bc.eestecistanbul@gmail.com</a> with your details (name, major and year, email address) or visit our office located at the Faculty of Technical Sciences, next to the student service.</p>
        <h3 className='contact-content'>Adres</h3>
        <p className='contact-content'>İTÜ Elektrik-Elektronik Fakültesi, 34469, Maslak, İstanbul</p>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12025.477480397456!2d29.0244064!3d41.1046235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e9b6bccd5d%3A0xcfe6367b57612fab!2s%C4%B0T%C3%9C%20Elektrik%20Elektronik%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1702735500195!5m2!1str!2str"></iframe>
        </div>
    </div>
  )
}

export default Contact