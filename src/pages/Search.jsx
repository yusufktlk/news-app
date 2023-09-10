import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {

    const [inputValue, setInputValue] = useState("election")
    const [searchValue,setSearchValue] = useState([])

    const getSearch =  () =>{
        const data =  axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae`)
        .then(res => setSearchValue(res.data.response.docs))
        .catch(err => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //         getSearch()
    // }, [inputValue])

    const clickButton = () =>{
        getSearch()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            clickButton()
        }
      };
    
    

  return (
    <div className='text-center mt-24'>
        <h1 className='text-4xl font-thin'>What topic would you like to see news about?</h1>
        <input onKeyDown={handleKeyDown} onChange={(e) => setInputValue(e.target.value) } placeholder='Search for News' className='border-2 border-black hover:border-red-700 duration-500 w-[300px] h-[40px] rounded-lg mt-6 mb-12 text-center' />
        <button onClick={() => clickButton()} className='border-2 border-black rounded-lg text-red-700 w-[100px] h-[40px] ml-4 hover:scale-105 duration-500'>Search</button>

        <div className='grid grid-cols-3 gap-y-20 mx-32 mb-24'>
            {
                searchValue?.map((val,key) =>{
                    return(
                        <div key={key} className='w-[350px] flex flex-col gap-y-2 border-2 p-6 border-red-800 rounded-lg hover:scale-105 duration-500'>

                            <Link to={val?.web_url} target='_blank'><h1 className='font-bold underline'>{val?.headline.main}</h1></Link>

                            <p className='font-thin'>{val?.lead_paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search