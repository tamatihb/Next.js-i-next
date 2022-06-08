import React from "react";
import Image from "next/image";
import TechImage from "../public/images/TechHero.jpg";
import { Element } from "react-scroll";
import Link from "next/link";

function HomePage() {
  return (
    <Element id="home" name="home">
      <div>
        <div className="pb-8 flex justify-between text-center font-semibold italic ">
          <div className="  absolute -z-10 hidden md:block">
            <Image
              src={TechImage}
              alt="TechImage"
              objectfit="cover"
              className="-z-0 cover	hidden md:block rounded-tl-extraLarge   "
            />
          </div>
          <div className="flex flex-col md:ml-20 mx-10 mt-10">
            <h1 className="font-bold text-7xl text-left mb-10 text-white">
              <span className="text-cyan-300">W</span>elcome To{" "}
              <span className="text-cyan-300">
                <br />!
              </span>
              News
            </h1>

            <p className="text-left font-normal font mb-5 flex-wrap bg-clip-text text-transparent text-2xl bg-white">
              Lorem, ipsum dolor sit{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">!next Officiis</span>
              </span>{" "}
              amet consectetur adipisicing elit. aperiam placeat molestiae atque
              tempore perspiciatis laboriosam quasi pariatur, vitae sequi
              veritatis veniam rerum, quos consectetur commodi rem totam
              voluptatum? Hic! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae quod facere sapiente{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}
              excepturi quidem ipsum Placeat, veritatis quam! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Earum vero error iusto
              laborum harum saepe? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. At, quaerat!
            </p>

            <Link  href="/LatestNews">
              <a
               
                className="font-semibold text-black md:mt-10  pt-5 bg-cyan-200 rounded-full w-60 h-16 text-lg hover:bg-cyan-300  "
              >
                Latest News
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default HomePage;
