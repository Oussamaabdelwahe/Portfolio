import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleclick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} alt="Logo image" style={{ width: "125px" }} />
      </div>
      {/*menu*/}

      <ul className='hidden md:flex'>
        <li>
        <Link to="home" smooth={true} duration={500}>
         Home
        </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>
         About
        </Link>
        </li>
        <li>
        <Link to="skills" smooth={true} duration={500}>
         Skills
        </Link>
        </li>
        <li>
        <Link to="work" smooth={true} duration={500}>
         Work
        </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>
         Contact
        </Link>
        </li>
      </ul>

      {/*hamberger*/}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>   <Link to="home" smooth={true} duration={500}>
         Home
        </Link>
        </li>
        <li className='py-6 text-4xl'> <Link to="about" smooth={true} duration={500}>
         About
        </Link>
        </li>
        <li className='py-6 text-4xl'> <Link to="skills" smooth={true} duration={500}>
         Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'>  <Link to="work" smooth={true} duration={500}>
         Work
        </Link>
        </li>
        <li className='py-6 text-4xl'>  <Link to="contact" smooth={true} duration={500}>
         Contact
        </Link>
        </li>
      </ul>
      {/*social icons*/}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/abdelwahed-oussama-b99946258/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/Oussamaabdelwahe?tab=repositories">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/abdelwahedoussama7%40gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=f8fa1b98d6&attid=0.1&permmsgid=msg-f:1755188538686930827&th=185baead32457f8b&view=att&disp=inline&realattid=f_lcyvubkd0&saddbat=ANGjdJ9VaXDQQHuVCpZEHQjBW4fWsFiOJ3fSnDViLMNcZkXqqQcMK6genbpD0SEjrd6g8WT0TWO7Vv7IULG5z4EnzjKFvNbTfbR91btQ4PzFJRRDwXA610agDC5I8yS-nDQO97X_Z7JNi1tPbCT3R2JNDrsGeLablXVq-ipNYuC6_N1TSdWl0cj8l906AvEd8XLl3VbTGZE8az0JkV9kI-fDUjJr7jB8WQ6XoQbQ-tLVQzcuvcmP-25Nwbod9FpZojGd_OBAOeZiTCQzQyH278kM7dxAw-vKJD4-Ja5AjVgAdC_DNKOMcngRKoDfw4OXTTphhXnKLCfR20A9VgU1gd7NU_UAV_oCsuJwTPMETfVB3imTnz1SunHLEoredQoEL9tzcc57wfn_d6UJtBNr4ORUg-EMYuHCkNmGJS1A4bIectqMDddiqwPDs-djVSWYP8hswHcToIk99vt_2k6HGZiG2zjszN8kU0zXn-zGeqDligWASlg-M-a9yi_zHQii8udm3SKWulytLw-aAiyn8tmqoxvrSTJo7npdpPalEyOUIxwZKy1WxmOb6-nnXxCPqky_udfzdm1vV7KAifPnWCSPWz7eY4FlYwsjVtp-HT3hzzMoed3bQMI6LG80pLbklsxiywjBnUZmloqJ8k784AKFwcJ763V-00bsY41BQAq8hnkfaJhxHVsmVq_trjSGXpkmkJxigpisBU6PIySBeg9xcBWaFPAaRZqCbUmmR_-NiRk8XjFilgSTGUV_DmLKHvunOyMaCHiOTc-utmDZ9eE_DfIhK2yXOIEUrTUIS14vii3C5I8SCRO3G3Us3-N3LrTQXyiCGpfMNNtedW9fKUb-X3CqkMUQKWGaC_JgDKLKHBeoQmUtkLDZrzVT-AVd97AGqE9QOWvqgMp6b9gIxR4r_TsvV2cXurkrzQgcqjm7Ty7RkVoYMcbqwG57kyopt8CBYtBmiLS3JDLaaFbfKO41Hl3uNvUwelGUQM9Xog">
              Resume<BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar