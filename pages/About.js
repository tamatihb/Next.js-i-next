import React from "react";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
//PAGES
import Customers from "./customers";
import Footer from "../components/Footer";
function About() {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-4">
      <div className=" mt-10 shadow-lg shadow-gray-500/40 pb-12 pb-4 w-full pt-16 pb-16 flex flex-col justify-center bg-gray-100 rounded-tl-extraLarge rounded-br-extraLarge font-semibold italic  ">
        <h1 className="text-black text-6xl font-bold text-center">
          <span className="text-cyan-300">A</span> Little Bit About Us.
        </h1>
        <br />
        <p className="text-xl text-gray-400">
          Lorem ip<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}sum dolor sit amet consectetur adipisicing elit. Voluptates
          temporbus harum laboriosam vel, velit quae quibusdam itaque rem!
          Dolor non ipsam mollitia provident eaque delectus amet suscipit modi!
          Nobis corporis consequatu molestias reiciendis optio tenetur eos qui
          illum deserunt vel dolorum expedita impedit non beatae dicta est neque
          dignissimos, nulla suscipit. Rem quibusdam eaque vel. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias nam ex expedita
          voluptas odit hic similique natus consectetur accusamus facere!
          Commodi maiores esse ad nemo ipsa. Ipsam, tempora, voluptatibus eaque
          nam temporibus deleniti aliquid iure delectus nihil cupiditate
          incidunt hic ea animi at voluptatum reprehenderit suscipit! Nihil ut
          delectus saepe eum ratione, distinctio provident dolor corrupti,
          libero ducimus cumque deserunt <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}magni reiciendis doloremque illo
          reprehenderit quisquam autem, rem pariatur nisi in! Iusto eligendi
          quibusdam quam, velit voluptate id delectus animi modi quaerat sit
          mollitia qui inventore, perspiciatis doloribus voluptatem beatae ipsa
          ex repellat nostrum! Distinctio cupiditate delectus dicta ad saepe?
        </p>
      </div>
      </div>
      <br />
      <Customers />
      <Footer />
    </Fragment>
  );
}

export default About;
