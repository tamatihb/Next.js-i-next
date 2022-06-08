import CardNews from './Card';

function NewsList(props) {
  return (
    <div className="grid grid-cols-3 gap-3 mx-3">
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
