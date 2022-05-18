import React from "react";
import Card from 'react-bootstrap/Card';

function SkillsDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>The Skills</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>
                        <ul className="user-details">
                            <li>{props.user.skill}</li>
                            <li>Placeholder skills in bubble form</li>
                            <li>{props.user.languages}</li>
                            <li>{props.user.interests}</li>
                            <li>Placeholder interests in bubble form</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SkillsDetailsSection;