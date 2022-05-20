import React from "react";
import Card from 'react-bootstrap/Card';

function ActivityDetailsSection(props) {

    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '25px', marginTop: '50px' }}>
                <Card.Body>
                    <Card.Title>Latest Activity</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '22rem', height: '4rem', justifyContent: 'center', marginBottom: '25px'}}>
                <Card.Body>
                    <Card.Text>
                            Most recent activity
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem', height: '4rem', justifyContent: 'center', marginBottom: '25px' }}>
                <Card.Body>
                    <Card.Text>
                            Second most recent
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '22rem', height: '4rem', justifyContent: 'center', marginBottom: '50px' }}>
                <Card.Body>
                    <Card.Text>
                            Third most recent
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ActivityDetailsSection;