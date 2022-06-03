import CardNews from './Card';

function NewsList(props) {
  return (
    <div>
      {props.load.map((news) => (
        <CardNews
          key={ news.title}
          id={ news.title}
          image={news.image}
          urlToImage={news.urlToImage}
          url={news.url}
          title={news.title}
          description={news.description}
        />
      ))}
    </div>
  );
}


export default NewsList;
