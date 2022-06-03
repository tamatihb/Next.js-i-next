import React from 'react'
import {Link} from 'react-scroll'
import Dropdown from './DropDown'


function Navbar() {

	return (
		<div>
			<nav className=" fixed z-20 bg-white w-full h-20 ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full ">
						<div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-2xl cursor-pointer">
									!<span className=" text-xxl text-cyan-300">NEWS</span>
								</h1>
                                
							</div>
							<div className="hidden md:block">
								<div className="ml-20 flex items-baseline space-x-4 text-xl">
									<Link
								
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-cyan-300 px-3 py-2 text-md"		 >		
																
										Home
									</Link>
									<Link
										activeClass="services"
										to="services"
										smooth={true}
										offset={-60}
										duration={500}
										className="cursor-pointer hover:text-cyan-300 text-black  px-3 py-2"
									>
										Services
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={-75}
										duration={500}
										className="cursor-pointer hover:text-cyan-300 text-black px-3 py-2"
									>
										News
									</Link>
									<Link
										activeClass="Clients"
										to="Clients"
										smooth={true}
										offset={0}
										duration={500}
										className="cursor-pointer hover:text-cyan-300   text-black px-3 py-2"
									>
										Clients
									</Link>
								
									

									
								</div>						
								</div>
								<div>
									<Dropdown/>
								</div>
							</div>
						<div className="mr-14 flex md:hidden ">								
						</div>
					</div>
				</div>				
			</nav>
		</div>
	);
}

export default Navbar;