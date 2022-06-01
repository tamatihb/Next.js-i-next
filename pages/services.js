import { GiCardboardBox } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillBank} from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { GoAlert } from "react-icons/go";

import { Element } from "react-scroll";

function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center py-4 bg-white  rounded-tr-extraLarge  pt-26 items-center">
				<h1 className="text-black bg- text-6xl font-bold text-center">
					 <span className="text-cyan-300">Our</span> Services
				</h1>
                		<p className="text-sm  text-gray-400">The Future In Technology.</p>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
					
                    
                    	{/* first div */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiFillBank className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-500 font-semibold">
								Your Banking Solution.
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea soluta mollitia obcaecati, deserunt numquam!
						</p>
					</div>

					{/* second div */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<BsFillPeopleFill className="w-10 h-10 bg-purple-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-500 font-semibold">
								Branding & Logo.
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet facilis rem dicta, modi sed.
						</p>
					</div>
				</div>
                	

				{/* third div */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<MdSecurity className="w-10 h-10 bg-red-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-500 font-semibold ">
								Security.
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sapiente iste voluptatibus excepturi repudiandae delectus.
						</p>
					</div>
             
            {/* second div */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<GoAlert className="w-10 h-10 bg-orange-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Sensitive Data.
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam libero aliquid sunt officiis, provident ipsam?
						</p>
					</div>
                </div>
            </div>
		</Element>
	);
}

export default services;