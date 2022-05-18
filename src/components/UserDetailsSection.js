import React from "react";
import Card from 'react-bootstrap/Card';

function UserDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>The Details</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>
                        <ul className="user-details">
                            <li>{props.user.name}</li>
                            <li>Placeholder location</li>
                            <li>{props.user.aboutMe}</li>
                            <li>{props.user.contactInfo}</li>
                            <li>Placeholder links</li>
                            <li>Placeholder current project</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserDetailsSection;