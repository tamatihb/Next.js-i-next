import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn } from "react-icons/si";
import {useState, useEffect} from "react"


function News() {



  return (
    <div className="flex-col justify-center items-center my-20">
      <h2 className="text-5xl text-center">
    <span className="text-cyan-300">    News  </span>Update
      </h2>
      <p className="text-gray-400  text-center">Latest News</p>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20 mx-10">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:border-gray-400  border-violet-100 rounded-md p-8 ">
            <FcBbc className="text-4xl text-gray-600 0" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-gray-400 my-2">
              Best Agency for App & web product with 100% quality work.
            </h1>
            <a
              href="#"
              className="text-xl text-gray-400 group-hover:text-gray-400 "
            >
              Read More... Link to Single page
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border   border-violet-100 rounded-md p-8 hover:border-gray-400">
            <SiCnn className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-gray-400 my-2">
              Product Hunt for Online Programming Courses & Tutorials
            </h1>
            <a
              href="#"
              className="text-xl text-gray-400 group-hover:text-gray-400 "
            >
              Read More...
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border  border-violet-100 rounded-md p-8 hover:border-gray-400">
            <FcBbc className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-gray-400 my-2">
              Best Agency for digital product with full ownership.
            </h1>
            <a
              href="#"
              className="text-xl text-gray-400 group-hover:text-gray-400 "
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;