import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'

function Navbar() {
  return (
    <div className='flex justify-between mx-24 mt-4 items-center'>
        <h1 className='text-3xl text-red-600 font-thin tracking-widest'>YusNews</h1>
        <div className='flex gap-x-8 items-center'>
            <Link to={'/'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Home</Link>
            <Link to={'/arts'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Arts</Link>
            <Link to={'/business'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Business</Link>
            <Link to={'/books'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Books</Link>
            <Link to={'/fashion'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Fashion</Link>
            <Link to={'/movies'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Movies</Link>
            <Link to={'/sports'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Sports</Link>
            <Link to={'/technology'} className='text-lg cursor-pointer hover:scale-110 duration-500 hover:text-red-600'>Technology</Link>
            <Link to={'/search'}><ImSearch  size={24} className='mt-1 cursor-pointer'/></Link>
        </div>
    </div>
  )
}

export default Navbar