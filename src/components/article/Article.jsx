import React, { Fragment } from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <Fragment>
      <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-image">
          <img src={imgUrl} alt="blog" />
        </div>
        <div className="gpt3__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>Read Full Article</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;
