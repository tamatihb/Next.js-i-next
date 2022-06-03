import axios from "axios";
import NewsList from "../components/News/NewsList";
import Navbar from "../components/Navbar";

// Aus News

function LatestNews(props) {
  console.log(props.MultiNews);



  return (
      <div>  
              <Navbar /> 
      {/* <div className="w-full pt-20 flex flex-col justify-center items-center bg-gray-100 rounded-tl-extraLarge font-semibold italic  ">
        <h1 className="text-black text-6xl font-bold text-center">
          <span className="text-cyan-300">World</span> News <br />
          <span className="text-cyan-300">Reported</span> Straight to you.
        </h1>
        <br />
        <p className="text-sm text-gray-400">
          We Keep you informed with the truth.
        </p> */}
        <div className="">
          <NewsList load={props.MultiNews} />
        </div>
      </div>
    // </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=858aeede6ac4496eac1575e6abe4c974`
  );
  const data = response.data.articles;

  return {
    props: {
      MultiNews: data,
    },
  };
};

export default LatestNews;
