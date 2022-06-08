// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { BsArrowDownRight } from 'react-icons/bs';

export default function Spa() {
  return (
    <div>
      <div>
        <Navbar />
        <div className=" w-full pt-10 flex flex-col justify-center items-center bg-gray-100 rounded-tl-extraLarge font-semibold italic  ">
          <div className="mx-10">
          <h1 className="text-black text-6xl font-bold text-center">
            <span className="text-cyan-300">Our</span> Privacy <br />
            Policy.
          </h1>
          <p className="text-xl text-gray-400 text-center ">
            Your Privacy is important to us.
          </p>
          <br />
         
          <br />
          <h1 className="text-4xl">Privacy Policy</h1>
          <p className="text-xl" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
            qu<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}ae atque aut id et. Nam expedita a maiores atque necessitatibus
            reiciendis hic veritatis animi eum? Doloremque, nesciunt. Quidem,
            eveniet. Debitis veniam saepe consequatur, incidunt modi sapiente
            eaque tempore atque ullam eius iusto quo autem asperiores architecto
            voluptatem cumque! Temporibus tempore rerum vel. Doloribus alias,
            incidunt ullam ipsam tempora fugit neque eaque. Aut voluptatem
            expedita commodi doloremque magnam nesciunt aliquid laborum velit,
            adipisci eligendi repudiandae neque rerum quos, sed obcaecati
            pariatur, dolores porro excepturi a ipsa debitis ut optio maxime
            sint. Reiciendis repellat quas aperiam deserunt libero nulla dicta?
            Ipsa distinctio omnis rerum et quae maiores, quam id architecto
            alias voluptates, ni<span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}si perferendis sint non exercitationem iste
            asperiores libero eos? Ut, in assumenda ullam, quisquam aliquid
            expedita delectus unde suscipit error inventore officiis
            repellendus. Temporibus non expedita et libero, nisi nobis possimus,
            saepe itaque quo corrupti nam ad. Dolorem, provident?
          </p>
          <br />
          <h1 className="text-4xl text-center ">
            How do we collect your personal information?
          </h1>
          <p className="text-center text-xl">
            We collect your personal information directly from you when you:
          </p>
          <div>
   
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          <div className="flex  flex-col justify-center items-center">
            {/* first div */}
            <div className="flex justify-center items-center cursor-pointer">
              <BsArrowDownRight className="w-10 h-10 bg-cyan-500 text-black m-3 p-1 shadow-xl rounded-md" />

              <h2 className="text-xl text-indigo-500 font-semibold">
              Interact with us over the phone.
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
              <BsArrowDownRight className="w-10 h-10 bg-cyan-400 text-black m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-500 font-semibold">
                Interact with us online.
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
              <BsArrowDownRight className="w-10 h-10 bg-cyan-500 text-black m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-500 font-semibold ">
                Subscribe to our mailing list.
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
              <BsArrowDownRight className="w-10 h-10 bg-cyan-400 text-black m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
              Apply for a position with us.           </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              libero aliquid sunt officiis, provident ipsam?
            </p>
          </div>
        </div>
      </div>
    </div>
          <h1 className="text-4xl mt-16 ">Collecting personal information from third parties</h1>
          <p className="text-xl mb-6">
            We may also <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-cyan-300 relative inline-block">
                <span className="relative text-white">itaque repudiandae.</span>
              </span>{" "}collect your personal information from third parties or
            through publicly available sources, for example from you.
            We collect your personal information from these third parties so
            that [insert the purpose for which your organisation collects
            personal information from these third parties].
          </p>
        </div>
      </div>
   
      <br />
      <Footer />
    </div>
  );
}
