import React from 'react'
import './Footer.css'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer className='footer-container'>
      <p className='footer-text'>Agustin Martinez</p>
      <p className='footer-text'>all right reserved | {year}</p>
    </footer>
  )
}

export default Footer
