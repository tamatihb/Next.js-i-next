import { FaRegNewspaper } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiFillAudio } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

import { Element } from "react-scroll";

function services() {
  return (
    <Element id="services" name="services">
      <div className="w-full my-40 h-auto flex flex-col justify-center py-4 bg-white  rounded-tr-extraLarge  pt-26 items-center font-semibold italic">
        <h1 className="text-black bg- text-6xl font-bold text-center">
          <span className="text-cyan-300">Our</span> Services
        </h1>
        <p className="text-sm  text-gray-400">Connecting Us Through News.</p>
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex  flex-col justify-center items-center">
            {/* first div */}
            <div className="flex justify-center items-center cursor-pointer">
              <BiWorld className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />

              <h2 className="text-xl text-indigo-500 font-semibold">
                World Connections.
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ea soluta mollitia obcaecati, deserunt numquam!
            </p>
          </div>

          {/* second div */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <FaRegNewspaper className="w-10 h-10 bg-purple-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-500 font-semibold">
                Up To Date News.
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet
              facilis rem dicta, modi sed.
            </p>
          </div>
        </div>

        {/* third div */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex flex-col justify-center items-center">
            {/* first block */}
            <div className="flex justify-center items-center cursor-pointer">
              <AiFillAudio className="w-10 h-10 bg-red-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-500 font-semibold ">
                Live Podcasts.
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              sapiente iste voluptatibus excepturi repudiandae delectus.
            </p>
          </div>

          {/* second div */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <BiMailSend className="w-10 h-10 bg-orange-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Delivering Fast And Reliable News.
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              libero aliquid sunt officiis, provident ipsam?
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default services;
