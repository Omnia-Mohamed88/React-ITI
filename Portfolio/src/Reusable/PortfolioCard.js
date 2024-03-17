import React from 'react';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ title, description , className}) => {
    return (
        <Card className={className}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PortfolioCard;
