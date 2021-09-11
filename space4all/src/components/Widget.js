import React from "react";

//Styled Components
import styled from "styled-components";

//Icons
import { FaRegEye } from "react-icons/fa";

const Widget = () => {
    return (
        <StyledWidget>
            <FaRegEye className="accessWidget" color="white" />
        </StyledWidget>
    );
};

const StyledWidget = styled.button`
    height: 50px;
    width: 50px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0px;
    top: 113.5px;
    z-index: 10;
    border: none;
    cursor: pointer;
    @media (max-width: 1300px) {
        top: 81.5px;
    }

    .accessWidget {
        font-size: 2rem;
    }
`;

export default Widget;
