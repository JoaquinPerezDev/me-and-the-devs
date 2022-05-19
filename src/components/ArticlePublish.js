import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function ArticlePublish(props) {

    const [errorMessage, setErrorMessage] = useState(undefined);  
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { title, content };
        const storedToken = localStorage.getItem("authToken");

        axios
          .post(`${API_URL}/api/articles/create`, 
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}`}}
          )
          .then(() => {
            setTitle('');
            setContent('');

            props.refreshArticles();
            navigate("/articles");
          })
          .catch((err) => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription);
          });
    }

    return (
    <div className="PublishArticle" style={{ display: 'flex'}}>
      <h3>Publish an Article</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 
        <label>Content:</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default ArticlePublish;