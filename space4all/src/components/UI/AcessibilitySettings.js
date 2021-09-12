import React from "react";

//styled components
import styled from "styled-components";

//components
import Button from "./Button";

const AcessibilitySettings = ({ onClick, fontIncrease, fontDecrease }) => {
    return (
        <StyledPopOut>
            <Button onClick={onClick} text="Close">
                Close
            </Button>
            <div>
                <Button text="A -" onClick={fontDecrease} />
                <Button text="A +" onClick={fontIncrease}></Button>
            </div>
        </StyledPopOut>
    );
};

const StyledPopOut = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 500px;
    background-color: var(--d-blueish);
    padding: 2rem;
    text-align: center;
    z-index: 9999;
    color: white;

    input[type="range"] {
        accent-color: var(--green);
    }
`;

export default AcessibilitySettings;
