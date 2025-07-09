import { MenuSquareIcon } from 'lucide-react'
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from './components/ui/button'

const Header = () => {

  const location = useLocation()
  const tabs = [
    {Name:"Home", path:"/"},
    {Name:"About", path:"/about-me"},
    {Name:"Portfolio", path:"/my-work"},
    {Name:"Contact", path:"/contact-me"},
  ]
  
  return (
    <>
      <nav id='header' className='flex h-[8dvh] justify-between px-5 items-center  bg-[#F3DADF] text-lg'>
        <h1 className=' chillax flex md:justify-center md:text-2xl'>Gillian Nsisong Brendan</h1>
        <div className=' hidden md:flex gap-15 '>
          {tabs.map(({Name,path}) => (
          <Link key={Name} className={`hover:-translate-y-1 duration-300 hover:text-white ${location.pathname === path ? "border-b border-white/80" : "text-black"}`} to={path}>{Name}</Link>
          ))}
        </div>
        <a href='#footer' className='scroll-smooth md:hidden'>
          <MenuSquareIcon />
        </a>
        <div className='hidden lg:flex'>
          <a href="http://wa.link/uik3w6" 
            target="_blank" rel="noopener noreferrer">
            <Button className='bg-[#AE7DAC]'>Let's Talk</Button>
         </a>
        </div>
      </nav>
    </>
  )
}

export default Header