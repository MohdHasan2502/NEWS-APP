/* eslint-disable react/prop-types */

const News = (props) => {
  
  return (
    <>
      <div className="news">
        <div className="news-img">
          <img src={props.article.urlToImage} />
        </div>
        <h1>{props.article.title}</h1>
        <p>{props.article.descriptions?.substring(0, 100).concat("...")}</p><a href={props.article.url}target='_blank'>Read more.</a>
        <div className="source">
          <p>Auther:{props.article.auther} </p>
          <p>{props.article.source.name}</p>
        </div>
      </div>
    </>
  );
};

export default News;
