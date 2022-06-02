import Image from "next/image";
import Img1 from "../public/images/Img1.jpg";
import Img2 from "../public/images/Img2.jpg";
import Img3 from "../public/images/Img3.jpg";
import Img4 from "../public/images/Img4.jpg";
import Img5 from "../public/images/Img5.jpg";
import Img6 from "../public/images/Img6.jpg";
import { Element } from "react-scroll";

function Projects() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 pt-6  flex flex-col justify-center items-center bg-gray-100 rounded-tl-extraLarge rounded-tr-extraLarge rounded-bl-extraLarge rounded-br-extraLarge ">
				<h1 className="text-black text-6xl font-bold text-center">
                <span className="text-cyan-300">World</span> News <br/><span className="text-cyan-300">Reported</span> Straight to you.
				</h1>
				<br/>
                <p className="text-sm text-gray-400">We Keep you informed with the truth.</p>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img1}
							alt="Img1"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img2}
							alt="Img2"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img3}
							alt="Img3"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img4}
							alt="Img4"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img5}
							alt="Img5"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Img6}
							alt="Img6"
							layout="fill"
							objectfit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				
			</div>
		</Element>
	);
}

export default Projects;