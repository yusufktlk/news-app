import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Books() {
    const [books,setBooks] = useState([])
    const [books2,setBooks2] = useState([])


    const getBooks = () => {
        const data = axios.get('https://api.nytimes.com/svc/topstories/v2/books.json?api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae')
        .then(res=> setBooks(res.data.results.splice(3,20)))
    }
    
    const getBooks2 = () => {
        const data = axios.get('https://api.nytimes.com/svc/topstories/v2/books.json?api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae')
        .then(res=> setBooks2(res.data.results.splice(0,3)))
    }
    
        useEffect(() => {
          getBooks()
          getBooks2()
        }, [])

  return (
    <div>
         <h1 className='text-center mt-24 text-5xl font-thin'>The daily diary of the <span className='text-red-600'>Books!</span></h1>
         <p className='text-center mt-12 text-3xl font-thin'>Stay ahead in the game by staying informative and up to date.</p>
        
         <div className='flex mx-20 gap-x-24 mt-24'>
              {
               books2.map((bus,key) => (
                <div key={key} className=''>
                  <a href={bus.url} target="_blank" rel="noreferrer"><img src={bus.multimedia[0].url} className='w-[400px] h-[400px] hover:opacity-80 duration-500 cursor-pointer' /></a>
                  <a href={bus.url} target="_blank" rel="noreferrer"><h1 className='w-[400px] text-lg mt-2 text-center hover:underline cursor-pointer'>{bus.title}</h1></a>
                  <p className='text-sm font-thin text-center mt-1'>{bus.abstract}</p>
                </div>
               )) 
              }
        </div>

        <hr className='border-2 mt-12' />
        <h1 className='ml-44 underline text-lg tracking-widest mt-24'>Lates Books News</h1>

         <div className='flex flex-col mt-10 mx-44 gap-y-12 mb-24'>
              {
                books.map((bus,key) => (
                  <div key={key} className='flex gap-x-12'>
                    <div className='w-[800px]'>
                    <a href={bus.url} target="_blank" rel="noreferrer"><h1 className='text-2xl tracking-wider font-bold hover:underline cursor-pointer'>{bus.title}</h1></a>
                      <p className='mt-4 font-thin tracking-widest w-[600px]'>{bus.abstract}</p>
                    </div>
                    <a href={bus.url} target="_blank" rel="noreferrer"><img src={bus.multimedia[0].url} className='w-[400px] h-[200px] hover:opacity-80 duration-500 cursor-pointer' /></a>
                  </div>
                ))
              }
        </div>
    </div>
  )
}

export default Books
