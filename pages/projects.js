
import { Element } from "react-scroll";
import NewsApi from "../components/NewsApi";

function Projects() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 pt-6  flex flex-col justify-center items-center bg-gray-100 rounded-tl-extraLarge  ">
				<h1 className="text-black text-6xl font-bold text-center">
                <span className="text-cyan-300">World</span> News <br/><span className="text-cyan-300">Reported</span> Straight to you.
				</h1>
				<br/>
                <p className="text-sm text-gray-400">We Keep you informed with the truth.</p>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<NewsApi/>
				</div>

				
			</div>
		</Element>
	);
}

export default Projects;