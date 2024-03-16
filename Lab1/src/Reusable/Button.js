import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ text, onClick, className }) => {
    return (
        <Button className={className} onClick={onClick}>
            {text}
        </Button>
    );
};

export default CustomButton;
