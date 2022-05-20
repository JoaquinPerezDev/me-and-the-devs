import React from "react";
import Card from 'react-bootstrap/Card';

function ProjectsDetailsSection(props) {


    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '25px', marginTop: '50px' }}>
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
                </Card.Body>
            </Card>
            { props.user.project && props.user.project.map((project) => {
            return (
                <>
                <Card className="container" style={{ height: '4rem', justifyContent: 'center', marginBottom: '25px'}}>
                    <Card.Body>
                        <Card.Text>
                        <h6>{project.description}</h6>
                                {/* project.madeWith, etc */}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </>
            )
            } )
            }
        </div>
    )
}

export default ProjectsDetailsSection;