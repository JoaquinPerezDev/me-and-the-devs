import React from "react";
import Card from 'react-bootstrap/Card';

function ProjectsDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '25px', marginTop: '50px' }}>
                <Card.Body>
                    <Card.Title>The Projects</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '1rem', fontSize: '1rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <h6>Project 1</h6>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '4rem', justifyContent: 'center', marginBottom: '25px'}}>
                <Card.Body>
                    <Card.Text>
                            <p>Project 1 details here</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '1rem', fontSize: '1rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <h6>Project 2</h6>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '4rem', justifyContent: 'center', marginBottom: '25px' }}>
                <Card.Body>
                    <Card.Text>
                            <p>Project 2 details here</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height: '1rem', fontSize: '1rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <h6>Project 3</h6>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '4rem', justifyContent: 'center', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>
                            <p>Project 3 details here</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectsDetailsSection;