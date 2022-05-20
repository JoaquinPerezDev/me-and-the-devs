import React from "react";
import Card from 'react-bootstrap/Card';

function LinksDetailsSection(props) {
console.log(props)
    return(
        <div>
            <Card style={{ width: '10rem', height: '3rem', justifyContent: 'center', marginBottom: '15px' }}>
                <Card.Body>
                    <Card.Title>The Links</Card.Title>
                </Card.Body>
            </Card>
            <Card className="container" style={{ marginBottom: '50px' }}>
                <Card.Body>
                        { props.user.link && (
                            <>
                            <a href={props.user.link.gitHub}>{props.user.link.gitHub === '' || props.user.link.gitHub === 'none' ? '' : 'GitHub'}</a>
                            <br/>
                            <a href={props.user.link.linkedIn}>{props.user.link.linkedIn === '' || props.user.link.linkedIn === 'none' ? '' : 'LinkedIn'}</a>
                            <a href={props.user.link.dev}>{props.user.link.dev === '' || props.user.link.dev === 'none' ? '' : 'Dev'}</a>
                            <a href={props.user.link.medium}>{props.user.link.medium === '' || props.user.link.medium === 'none' ? '' : 'Medium'}</a>
                            <a href={props.user.link.twitter}>{props.user.link.twitter === '' || props.user.link.twitter === 'none' ? '' : 'props.user.link.twitter'}</a>
                            </>
                       )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default LinksDetailsSection;