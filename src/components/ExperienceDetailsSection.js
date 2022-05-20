import React from "react";
import Card from 'react-bootstrap/Card';

function ExperienceDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>Experience</Card.Title>
                </Card.Body>
            </Card>
            <Card className="container" style={{ marginBottom: '50px' }}>
                <Card.Body>
                            <h4>Education</h4>
                            {props.user.education}
                            
                            <h4>Work Experience</h4>
                            {props.user.experience}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceDetailsSection;