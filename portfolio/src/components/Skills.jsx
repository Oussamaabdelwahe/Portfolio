import React from 'react'
import Angular from '../assets/Angular.png'
import Css from '../assets/Css.png'
import Github from '../assets/Github.png'
import Html from '../assets/Html.png'
import javaScript from '../assets/JavaScript.png'
import mongodb from '../assets/mongodb.jpg'
import mysql from '../assets/mysql.jpg'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'
import reactnative from '../assets/reactnative.png'
import express from '../assets/express.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          <p className='py-4'>// These are the technologie I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt="Html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt="Html icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javaScript} alt="Html icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={reactjs} alt="Html icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={reactnative} alt="Html icon" />
            <p className='my-4'>REACT-NATIVE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={nodejs} alt="Html icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="Html icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongodb} alt="Html icon" />
            <p className='my-4'>MONGODB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mysql} alt="Html icon" />
            <p className='my-4'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Angular} alt="Html icon" />
            <p className='my-4'>ANGULAR</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={express} alt="Html icon" />
            <p className='my-4'>EXPRESS</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills