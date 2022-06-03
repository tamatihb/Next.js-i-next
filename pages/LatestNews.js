
import axios from "axios";
import CardNews from "../components/News/Card"
import NewsList from "../components/News/NewsList"


// Aus News

function AllNews(props) {
  console.log(props.MultiNews)
  return (
    <div>
        <NewsList loadNews={props.MultiNews} />

    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=858aeede6ac4496eac1575e6abe4c974`);
  const data = response.data.articles

  return {
    props: {
      MultiNews: data
    },
  };
};


export default AllNews;