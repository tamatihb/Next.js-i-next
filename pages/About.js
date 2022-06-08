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
      <div className="mx-3.5 mt-4 pb-4 w-full pt-20 flex flex-col justify-center items-center bg-gray-100 rounded-tl-extraLarge font-semibold italic  ">
        <h1 className="text-black text-6xl font-bold text-center">
          <span className="text-cyan-300">A</span> Little Bit About Us.
        </h1>
        <br />
        <p className="text-2xl text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          temporibus harum laboriosam vel, velit quae quibusdam itaque rem!
          Dolor non ipsam mollitia provident eaque delectus amet suscipit modi!
          Nobis corporis consequatur molestias reiciendis optio tenetur eos qui
          illum deserunt vel dolorum expedita impedit non beatae dicta est neque
          dignissimos, nulla suscipit. Rem quibusdam eaque vel. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias nam ex expedita
          voluptas odit hic similique natus consectetur accusamus facere!
          Commodi maiores esse ad nemo ipsa. Ipsam, tempora, voluptatibus eaque
          nam temporibus deleniti aliquid iure delectus nihil cupiditate
          incidunt hic ea animi at voluptatum reprehenderit suscipit! Nihil ut
          delectus saepe eum ratione, distinctio provident dolor corrupti,
          libero ducimus cumque deserunt magni reiciendis doloremque illo
          reprehenderit quisquam autem, rem pariatur nisi in! Iusto eligendi
          quibusdam quam, velit voluptate id delectus animi modi quaerat sit
          mollitia qui inventore, perspiciatis doloribus voluptatem beatae ipsa
          ex repellat nostrum! Distinctio cupiditate delectus dicta ad saepe?
        </p>
      </div>
      <br />
      <Customers />
      <Footer />
    </Fragment>
  );
}

export default About;
