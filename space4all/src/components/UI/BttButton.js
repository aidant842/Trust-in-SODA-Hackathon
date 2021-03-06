import React from "react";

//components
import Button from "./Button";

//Styled Components
import styled from "styled-components";

//React Icons
import { TiArrowUpThick } from "react-icons/ti";

const BttButton = ({ onClick, width }) => {
    return (
        <StyledButton
            width={width}
            text={<TiArrowUpThick className="bttArrow" />}
            onClick={onClick}
        />
    );
};

const StyledButton = styled(Button)`
    position: fixed;
    right: 15px;
    bottom: 50px;
    cursor: pointer;

    &:hover {
        border: 1px solid var(--blue);
    }

    .bttArrow {
        font-size: 2rem;
    }
`;

export default BttButton;
