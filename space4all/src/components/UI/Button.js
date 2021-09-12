import React from "react";

//Styled Components
import styled from "styled-components";

const Button = ({ text, onClick, className }) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    height: 50px;
    width: 100px;
    background-color: var(--blue);
    color: white;
    border: none;
    transition: all 0.3s ease;
    &:hover {
        background-color: white;
        color: var(--blue);
    }
`;

export default Button;
