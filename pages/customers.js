import { FaApple } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import {IoLogoYoutube} from "react-icons/io"
import { Element } from "react-scroll";

function Customers() {
	return (
		<Element id="Clients" name="Clients">
			<div className="mx-4">
				<div className=" shadow-lg shadow-gray-500/40 font-semibold italic rounded-tr-extraLarge  rounded-bl-extraLarge w-full my-10 h-auto flex flex-col justify-center items-center bg-gray-100  rounded-lg py-10 ">
				
					<div className="flex justify-between text-center  md:gap-10 gap-2">
						
						
						<div className="flex justify-center items-center cursor-pointer">
							<FaApple className="md:w-20 md:h-20 w-16 h-16  text-gray-500 md:m-3 p-1 hover:text-gray-600" />
						</div>
                        <div className="flex justify-center items-center cursor-pointer">
							<AiFillFacebook className="md:w-20 md:h-20 w-16 h-16  text-blue-500 md:m-3 p-1 hover:text-blue-600" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<FaAirbnb className="md:w-20 md:h-20 w-16 h-16  text-red-500 md:m-3 p-1 hover:text-red-600" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<BsInstagram className="md:w-20 md:h-20 w-16 h-16  text-purple-500 md:m-3 p-1 hover:text-purple-600" />
						</div>
						<div className="flex justify-center items-center cursor-pointer">
							<IoLogoYoutube className="md:w-20 md:h-20 w-16 h-16  text-red-500 md:m-3 p-1 hover:text-red-600" />
						</div>
					</div>
					<h1 className="text-black text-6xl font-bold text-center">
                    <span className="text-cyan-300">Contributers</span> To Our Success.
					</h1>
				</div>
			</div>
		</Element>
	);
}

export default Customers;