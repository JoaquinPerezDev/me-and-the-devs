import React from "react";
import Card from 'react-bootstrap/Card';

function UserDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>Details</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ marginBottom: '50px' }}>
                <Card.Body>
                        <ul className="user-details">
                            <h1>{props.user.name}</h1>
                            <li>{props.user.location}</li>
                            <li>{props.user.aboutMe}</li>
                            <li>{props.user.contactInfo}</li>
                        </ul>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserDetailsSection;