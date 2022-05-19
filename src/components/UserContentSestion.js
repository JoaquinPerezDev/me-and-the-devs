import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserContentSection(props) {
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
          <Card.Title>The Content</Card.Title>
        </Card.Body>
      </Card>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card
              className={{
                width: "1rem",
                height: "2rem",
                fontSize: "1rem",
                justifyContent: "center",
              }}
            >
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>Article body</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UserContentSection;
