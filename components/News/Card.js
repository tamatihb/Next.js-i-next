import React from "react";
import { FcBbc } from "react-icons/fc";
import { Element } from "react-scroll";
// news item

function CardNews(props) {

 
  return (
    <Element id="News" name="News">
      <div className="border-style-solid border-2 border-gray-300 hover:border-black">
        {/* Logo */}
        <FcBbc className="text-6xl  " />

        {/* Image */}
        <img src={props.urlToImage} alt="New Image" objectfit="cover"></img>
        <br />

        {/* Link to Page with information about article */}
        {/* Text Body */}
        <h3 className="text-black text-2xl font-bold text-center">
          <a href={props.url}>
            {props.title} <span className="text-gray-400 text-xl">Read More...</span>
          </a>
        </h3>
        {/* text Body */}
        <br />
        <p>{props.description}</p>
      </div>
    </Element>
  
  );
}

export default CardNews;
