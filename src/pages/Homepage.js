import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const API_URL = process.env.REACT_APP_API_URL;

function Homepage(props) {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const { userId } = useParams();

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    // getUsersInfo();
    axios
      .get(`${API_URL}/api/users`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.slice(0,4));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles`)
      .then((response) => {
        setArticles(response.data.slice(0,4));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="mainTitle">
      <div>
        <Card
          style={{
            height: "3rem",
            justifyContent: "center",
            marginBottom: "50px",
            marginTop: "50px"
          }}
        >
          <Card.Body>
            <Card.Title>What makes you, you?</Card.Title>
          </Card.Body>
        </Card>
        </div>
      </div>

      <div className="homeBody">
        <div>
          <Card
            style={{
              height: "2rem",
              justifyContent: "center",
              marginBottom: "25px"
            }}
          >
            <Card.Body>
              <Card.Title>Developer spotlight</Card.Title>
            </Card.Body>
          </Card>
          <div className="devSpotlightContainer">
            {/* <CardGroup> */}
            {users.map((user) => {
              return (
                <Card
                  className="devSpotlightCard"
                >
                  <Card.Img variant="top" src={user.imageUrl} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Link to={`/profile/${user._id}`}>User profile</Link>
                  </Card.Body>
                </Card>
              );
            })}

          </div>
          <Card
            style={{
              height: "2rem",
              justifyContent: "center",
              marginBottom: "25px",
              marginTop: '4rem'
            }}
          >
            <Card.Body>
              <Card.Title>Article spotlight</Card.Title>
            </Card.Body>
          </Card>
          <div className="articleSpotlightContainer">
            {/* <CardGroup> */}
            {articles.map((article) => {
              return (
                <Card
                  className="articleSpotlightCard"
                >
                  <Card.Img variant="top" src={article.imageUrl} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.summary}</Card.Text>
                    <Link to={`/articles/${article._id}`}>Read More</Link>
                  </Card.Body>
                </Card>
              );
            })}

          </div>
        </div>
        {/* 

                generate 4 random users from the user database
                generate 4 random articles from the article database



                 */}
      </div>
    </div>
  );
}

export default Homepage;
