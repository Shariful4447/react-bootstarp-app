import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = (props) => {
    const { title, description } = props.article;
    

    
    
    return (
        
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    
                    <p>{title}</p>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
       
    );
};

export default News;