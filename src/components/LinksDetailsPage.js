import React from "react";
import Card from 'react-bootstrap/Card';

function LinksDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>The Links</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>

                            <p>Github</p>
                            <p>Linkedin</p>
                            <p>Medium</p>
                            <p>Dev</p>
                            <p>Twitter</p>
                            <p>Portfolio</p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LinksDetailsSection;