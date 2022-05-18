import React from "react";
import Card from 'react-bootstrap/Card';

function ExperienceDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>The Experience</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>
                        <ul className="user-details">
                            <li>{props.user.education}</li>
                            <li>Placeholder second education</li>
                            <li>{props.user.experience}</li>
                            <li>Placeholder second experience</li>
                            <li>Placeholder third experience</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceDetailsSection;