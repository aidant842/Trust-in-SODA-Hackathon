import React from "react";

//styled components
import styled from "styled-components";

//components
import Button from "./Button";

//Framer Motion
import { motion } from "framer-motion";

const AcessibilitySettings = ({
    onClick,
    fontIncrease,
    fontDecrease,
    highlightLinks,
}) => {
    return (
        <StyledPopOut
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 500, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ delay: 0.15 }}
        >
            <Button onClick={onClick} text="Close">
                Close
            </Button>
            <div>
                <Button text="A -" onClick={fontDecrease} />
                <Button text="A +" onClick={fontIncrease}></Button>
            </div>
            <div>
                <Button text="Highlight Links" onClick={highlightLinks} />
            </div>
        </StyledPopOut>
    );
};

const StyledPopOut = styled(motion.div)`
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
