import React from "react";
import { FcBbc } from "react-icons/fc";

function CardNews(props) {
  return (
    
<div className="shadow-lg shadow-gray-500/40">
  {/* Logo */}
  <FcBbc className="text-6xl " />
  {/* Image */}
  <img
    src={props.urlToImage}
    alt="New Image"
    className="rounded-br-extraLarge  "
    objectfit="cover"
  ></img>
  {/* Link to Page with information about article */}
  {/* Text Body */}
  <h3 className="self-center md:text-xl md:col-span-2 md:text-center md:px-4">
    <a href={props.url}>
      {props.title}{" "}
      <br />
      <span className="font-normal text-gray-700 dark:text-gray-400">
        Read More...
      </span>
    </a>
  </h3>
  {/* text Body */}
  <br />
  <p className="xs:h-auto xs:square">{props.description}</p>
</div>
  );
}

export default CardNews;
