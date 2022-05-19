

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function ArticleDetailsPage(props) {
  const [article, setArticle] = useState(null);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { articleId } = useParams();
  const navigate = useNavigate();


  const getArticleDetails = () => {
    axios
      .get(`${API_URL}/api/articles/${articleId}`)
      .then((response) => setArticle(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getArticleDetails();
  }, [] );

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const requestBody = { author, comment };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/articles/${articleId}/comment`, 
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}`}}
      )
      .then(() => {
        setComment('');
        setAuthor('');
        props.refreshArticles();
        navigate(`/articles/${articleId}`);
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
}

    return(
    <div className="ArticleDetailsPage">
        <h1>The Article Page</h1>
        

        {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>

          <form onSubmit={handleCommentSubmit}>
        <label>Comment:</label>
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
        </>
      )}
 
      {article &&
        article.comments.map((comment) => (
          <li className="CommentCard card" key={comment._id}>
            <p>{comment.content}</p>
          </li>
        ))}
 
      <Link to="/articles">
        <button>Back to articles</button>
      </Link>
      <Link to={`/articles/edit/${articleId}`}>
        <button>Edit Article</button>
      </Link>      
      
        

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

export default ArticleDetailsPage;