import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cardstyling from './Card.css'
function Card({ product }) {
    return (
        <div key={product.id}>
            <BootstrapCard className="card">
                <BootstrapCard.Img variant="top" src={product.thumbnail} className="card-img" />
                <BootstrapCard.Body>
                    <BootstrapCard.Title>{product.title}</BootstrapCard.Title>
                    <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
                    <Link to={`/products/${product.id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </BootstrapCard.Body>
            </BootstrapCard>
        </div>
    );
}

export { Card };
