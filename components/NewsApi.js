import React, {useEffect, useState} from 'react'
import axios from 'axios'

// Pages
import CardNews from './Card'

const NewsApi = () => {
  const [news, setNews] = useState([]);
  const apiKey = '858aeede6ac4496eac1575e6abe4c974'
  useEffect(() =>{
   
    const getNews = async (apiKey) => {
    const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=${apiKey}` 
        
      );
      setNews(res.data.articles);
      console.log(res)
    };
    getNews(apiKey)
  },[])

return(
 
<div className=" grid grid-cols-3 gap-4 mx-auto px-3  ">
{news.map(({title, description, url, urlToImage}) =>(
  <CardNews 

  key={url}
  title={title} 
  description={description} 
  url={url} 
  urlToImage={urlToImage}/>
))}
</div>

)



}
export default NewsApi
