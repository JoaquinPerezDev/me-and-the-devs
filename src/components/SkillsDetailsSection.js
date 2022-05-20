import React from "react";
import Card from 'react-bootstrap/Card';

function SkillsDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>Skills</Card.Title>
                </Card.Body>
            </Card>
            <Card className="container" style={{ marginBottom: '50px' }}>
                <Card.Body>
                        <ul className="user-details">
                            <h3>{props.user.skill}</h3>
                        </ul>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SkillsDetailsSection;