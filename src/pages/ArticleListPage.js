

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";


function ArticleListPage(props) {
  const [articles, setArticles] = useState([]);


  const getAllArticles = () => {
    axios
      .get(`${API_URL}/api/articles`)
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllArticles();
  }, [] );

    return(
    <div>
        <h1>The Article Page</h1>
        
        <div className="ArticleListPage">
      
            {articles.map((article) => {
                return (
                <div className="ProjectCard card" key={article._id} >
                    <Link to={`/articles/${article._id}`}>
                    <h3>{article.title}</h3>
                    </Link>
                </div>
                );
            })}     
            
        </div>
            {/*  
            1) the goal is to make a document editor that the 
            registered user can use to publish articles on 
            their profile, this would include formatting tools, 
            image upload and document structure design if possible. 
            
            2) Need to think about how to create a separate 
            version of the article page for when a user(logged 
            in or not) wants to read the article, so it generates
            the entire article and all its details instead of 
            the above version.
            */}
        </div>
    )
}

export default ArticleListPage;