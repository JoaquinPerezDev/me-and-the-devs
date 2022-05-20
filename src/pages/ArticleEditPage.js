import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ArticleEditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { articleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles/${articleId}`)
      .then((response) => {
        const article = response.data;
        setTitle(article.title);
        setContent(article.content);
      })
      .catch((err) => console.log(err));
  }, [articleId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, content };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/articles/${articleId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/articles/${articleId}`);
      });
  };

  const deleteArticle = () => {
    const requestBody = { title, content };
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/articles/${articleId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/articles");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditArticlePage">
      <h3>Edit your Article</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content:</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Update your Article</button>
      </form>
      <button onClick={deleteArticle}>Delete this Article</button>
    </div>
  );
}

export default ArticleEditPage;
