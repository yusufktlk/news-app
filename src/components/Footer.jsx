import React from 'react'
import {useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <>
    <hr />
    <div className='flex justify-around mb-10  mt-10 font-thin text-sm'>
        <div className='flex flex-col gap-y-1'>
            <h1 className='font-bold'>SECTIONS</h1>
            <a onClick={() => navigate('/')& window.scroll(0,0)} className='cursor-pointer'>Home</a>
                <a onClick={() => navigate('/arts')& window.scroll(0,0)} className='cursor-pointer'>Arts</a>
                <a onClick={() => navigate('/business')& window.scroll(0,0)} className='cursor-pointer'>Business</a>
                <a onClick={() => navigate('/books')& window.scroll(0,0)} className='cursor-pointer'>Books</a>
                <a onClick={() => navigate('/fashion')& window.scroll(0,0)} className='cursor-pointer'>Fashion</a>
                <a onClick={() => navigate('/movies')& window.scroll(0,0)} className='cursor-pointer'>Movies</a>
                <a onClick={() => navigate('/sports')& window.scroll(0,0)} className='cursor-pointer'>Sports</a>
                <a onClick={() => navigate('/technology')& window.scroll(0,0)} className='cursor-pointer'>Technology</a>
        </div>
        <div className='flex flex-col gap-y-1'>
            <h1 className='font-bold'>SHOWS</h1>
            <a>Good Morning America</a>
            <a>Nightline</a>
            <a>World News Now & America This Morning</a>
            <a>This Week with George Stephanopoulos</a>
            <a>What Would You Do?</a>
            <a>YuNews.com</a>
        </div>
        <div className='flex flex-col gap-y-1'>
            <h1 className='font-bold'>TOOLS</h1>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
            <a>Tiktok</a>
            <a>Youtube</a>
        </div>
        <div className='flex flex-col gap-y-1'>
            <h1 className='font-bold'>ABOUT</h1>
            <a>Contact Us</a>
            <a>Feedback</a>
            <a>Share Tips with YusNews</a>
            <a>Terms of Use</a>
            <a>Privacy Policy</a>
            <a>Your US State Privacy Rights</a>
            <a>Authors List</a>
        </div>
    </div>
    <hr />
    <h5 className='text-center text-sm mt-2 mb-2 opacity-80'>yusnews.com 1991-2023 © YusNews</h5>
    </>
  )
}

export default Footer