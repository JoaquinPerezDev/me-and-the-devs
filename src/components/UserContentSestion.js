import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserContentSection(props) {
console.log(props)
  return (
    <div>
      <Card
        style={{
          width: "14rem",
          height: "3rem",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <Card.Body>
          <Card.Title>Content</Card.Title>
        </Card.Body>
      </Card>
      {/* {props.user.articles.map((article) => {
              return (
                <Card
                  className="articleCard"
                >
                  <Card.Img variant="top" src={article.imageUrl} />
                  <Card.Body>
                    <Card.Title>{article.author}</Card.Title>
                    <Card.Text>{article.summary}</Card.Text>
                    <Link to={`/articles/${article._id}`}>User profile</Link>
                  </Card.Body>
                </Card>
              );
            })} */}
    </div>
  );
}

export default UserContentSection;
