import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}
    &from=2023-12-21&apiKey=b754690f278943c897fa0921a5fbe72e`)
      .then((res) => res.json())
      .then((news) => setArticles(news.articles));
  }, [category]);
  return (
    <>
      <div className="main">
        <header className="header">
          <h1>The Daily World News</h1>
          <input
            className="btn"
            type="text"
            onChange={(event) => {
              if (event.target.value == "") {
                setCategory(event.target.value);
              } else {
                setCategory("india");
              }
            }}
            placeholder="Search News"
          />
        </header>
        <section className="news-articles">
          {
            // articles.length==0?
            articles.map((article) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <News article={article} />
              );
            })
            // :
            // <h1>Loading... No News Found</h1>
          }
        </section>
      </div>
    </>
  );
}

export default App;
