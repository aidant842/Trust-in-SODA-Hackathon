import React from "react";

//Styled Components
import styled from "styled-components";

const Button = ({ text, onClick, className, width, height }) => {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
            width={width}
            height={height}
        >
            {text}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    height: ${(props) => (props.height ? props.height : "50px")};
    width: ${(props) => (props.width ? props.width : "150px")};
    background-color: var(--blue);
    color: white;
    border: 1px solid white;
    transition: all 0.3s ease;
    &:hover {
        background-color: white;
        color: var(--blue);
        border: 1px solid var(--blue);
    }
`;

export default Button;
