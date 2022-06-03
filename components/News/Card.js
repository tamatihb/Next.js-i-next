import React from "react";
import { FcBbc } from "react-icons/fc";

function CardNews(props) {
  return (
    <div className="grid place-items-center min-h-screen border ">
      <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
        <div className=" text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 ">
          {/* Logo */}
          <FcBbc className="text-6xl " />
          {/* Image */}
          <img
            src={props.urlToImage}
            alt="New Image"
            className="rounded-lg  "
            objectfit="cover"
          ></img>
          {/* Link to Page with information about article */}
          {/* Text Body */}
          <h3 className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
            <a href={props.url}>
              {props.title}{" "}
              <span className="font-normal text-gray-700 dark:text-gray-400">
                Read More...
              </span>
            </a>
          </h3>
          {/* text Body */}
          <br />
          <p className="xs:h-auto xs:square">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
