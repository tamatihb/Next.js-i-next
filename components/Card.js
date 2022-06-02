import React from 'react'
import { FcBbc } from "react-icons/fc";
import { Element } from "react-scroll";

function CardNews({title, description, url, urlToImage}) {
    return (
        <Element id="News" name="News">

    <div>
{/* Logo */}
            <FcBbc className="text-4xl text-gray-600 " />
{/* Text Body */}
            <h3 className="text-xl text-gray-800 font-semibold group-hover:text-gray-400 my-2">
              <a href={url}>{title}</a>
              </h3>
{/* Image */}
            <img 
            src={urlToImage} 
            alt="New Image"
            objectfit="cover"
            ></img>

{/* text Body */}
              <p>{description}</p>
{/* Link to Page with information about article */}
            <a
              href="#"
              className="text-xl text-gray-400 group-hover:text-gray-400 "
            >
              Read More...
            </a>
            </div>

    
  
      </Element>
        )
}

export default CardNews
