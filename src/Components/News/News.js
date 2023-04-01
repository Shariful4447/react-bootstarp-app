import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = (props) => {
    const {title} = props.article;
    

    
    
    return (
        
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
       
    );
};

export default News;