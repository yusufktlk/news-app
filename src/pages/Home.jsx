import axios from "axios"
import { useEffect, useState } from "react"

function Home() {

    const [homeNews,setHomeNews] = useState([])
    const [usNews,setUsNews] = useState([])
    const [politics,setPolitics] = useState([])

    const nytkey = "YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae"

    const getNews = () => {
        const data = axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae")
        .then(res=> setHomeNews(res.data.results))
        .catch(err=>{
            console.log(err)
        })
    }

    const getUsNews = () => {
        const data = axios.get('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae')
        .then(res => setUsNews(res.data.results))
    }

    const getPolitics = () => {
        const data = axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=YXk5msAL9qVSUhGbaClNKaXYtEvJq7Ae')
        .then(res=> setPolitics(res.data.results.splice(0,22)))
    }

    useEffect(() => {
        getNews()
        getUsNews()
        getPolitics()
    }, [])

    
    
  return (
    <>
        <h1 className='text-center mt-24 text-5xl font-thin'>The daily diary of the <span className='text-red-600'>American Dream!</span></h1>
        <p className='text-center mt-12 text-3xl font-thin'>Stay ahead in the game by staying informative and up to date.</p>
        
    <div className="flex gap-x-4 mt-24 mb-24">

        <div className="flex flex-col gap-y-24 mx-12 ">
            {
                usNews.map((news,key) => (
                    <div key={key} className="flex gap-x-4">
                        <div>
                            <a href={news.url} target="_blank" rel="noreferrer"><h1 className="text-2xl hover:underline tracking-wider w-[600px] cursor-pointer">{news.title}</h1></a>
                            <p className="font-thin tracking-widest text-lg mt-6 w-[600px]">{news.abstract}</p>
                            <h3 className="font-thin mt-4">{news.byline}</h3>
                            <h5>{news.created_date}</h5>
                        </div>
                        <a href={news.url} target="_blank" rel="noreferrer"><img src={news.multimedia[0].url} className="w-[500px] h-[300px] hover:opacity-80 duration-500 cursor-pointer" /> </a>
                    </div>
                ))
            }
        </div>
        <h1 className="border-r-2 "></h1>
        <div className="flex flex-col gap-y-10 mr-4">
        <h1 className="underline text-lg ">Lates News</h1>
            {
                homeNews.map((news,key) => (
                    <>
                        <div key={key} className="flex gap-x-2">
                        <a href={news.url} target="_blank" rel="noreferrer"><h1 className="w-44 font-thin tracking-wider text-sm cursor-pointer hover:underline border-t-2">{news.title}</h1></a>
                        <a href={news.url} target="_blank" rel="noreferrer"><img src={news.multimedia[0].url} className="w-32 h-[80px] hover:opacity-80 cursor-pointer" /></a>
                        </div>
                        
                    </>
                ))
            }
            <hr className="border-2"/>
            <h2 className=" underline text-lg">POLITICS</h2>
            {
                politics.map((pol,key) => (
                    <div key={key}>
                        <a href={pol.url} target="_blank" rel="noreferrer"><img src={pol.multimedia[0].url} className="w-[320px] h-[200px] hover:opacity-80 duration-500 cursor-pointer" /></a>
                        <a href={pol.url} target="_blank" rel="noreferrer"><h1 className="font-thin text-sm w-[300px] mt-2 hover:underline cursor-pointer text-center ">{pol.title}</h1></a>
                    </div>
                ))
            }
            <hr className="border-2" />
        </div>








       

    </div>
    </>
  )
}

export default Home