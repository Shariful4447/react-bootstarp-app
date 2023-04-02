import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = (props) => {
    const { title, description, author } = props.article;
    

    
    
    return (
        
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <h5>Reporter : {author}</h5>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
       
    );
};

export default News;