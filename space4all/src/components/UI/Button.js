import React from "react";

//Styled Components
import styled from "styled-components";

const Button = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
    height: 50px;
    width: 100px;
    background-color: var(--blue);
    color: white;
    border: none;
`;

export default Button;
