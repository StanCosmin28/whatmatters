import "../index.css";
import data from "../assets/data.json";

export default function Article() {
  const articles = data.articles;

  return (
    <>
      <section className="article-container">
        <div className="article-cards">
          {articles.map((article, index) => (
            <a key={index} href="stan-cosmin.com" className="card-link">
              <>
                <picture>
                  <img src={article.image_url} alt="" />
                </picture>
                <div className="card-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
                <div className="card-date">
                  <p>{article.data_added}</p>
                </div>
              </>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
