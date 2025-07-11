import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ArrowUp, BriefcaseBusiness, ContactRound, Home } from 'lucide-react';

const Footer = () => {
  return (
    <>
    <footer className='max-h-[55dvh] synonym text-black flex flex-col gap-5 bg-[#F3DADF]'>
      <div className='flex md:flex-row gap-5 flex-col justify-between p-5'>
        <div className='text-2xl md:text-3xl text-foreground'>
          <p>Gillian Nsisong Brendan</p>
          <p className='chillax'>CopyWriter & Brand consultant</p>
        </div>
        <div className='text-2xl flex gap-5'> 
          <a href="https://www.linkedin.com/in/gillian-brendan-80095b199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="http://wa.link/uik3w6" 
            target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp />
          </a>
          <a href="https://www.instagram.com/_geelyann?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>

        </div>
      </div>
      <div id='footer' className='flex px-5 md:hidden gap-5'>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact-me'}>Contact</Link>
        <Link to={'/my-work'}>Portfolio</Link>
        <Link to={'/about-me'}>About</Link>
        <a href='#header'>Go-up </a>
      </div>
      <a 
       href='https://la-victoireportfolio.vercel.app/'
       className='flex flex-wrap text-black justify-center items-center'
       >
        &copy; 2025 Developed By La_Victoire. All Rights Reserved
      </a>
    </footer>
    </>
  )
}

export default Footer