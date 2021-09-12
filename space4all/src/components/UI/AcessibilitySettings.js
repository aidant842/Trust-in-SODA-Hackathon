import React from "react";

//styled components
import styled from "styled-components";

//components
import Button from "./Button";

const AcessibilitySettings = ({ onClick }) => {
    return (
        <StyledPopOut>
            <Button onClick={onClick} text="Close">
                Close
            </Button>
            <form>
                <label htmlFor="fontSize">Font Size</label>
                <input type="range" name="fontSize" id="fontSize" />
            </form>
        </StyledPopOut>
    );
};

const StyledPopOut = styled.div`
    position: fixed;
    right: 0;
    top: 113.5px;
    height: 100%;
    width: 500px;
    background-color: black;
    padding: 2rem;
    text-align: center;
    z-index: 9999;
`;

export default AcessibilitySettings;
