import React from "react";

//Styled Components
import styled from "styled-components";

const SplitContainer = ({ children, className }) => {
    return <StyledHalfWidth className={className}>{children}</StyledHalfWidth>;
};
const StyledHalfWidth = styled.div`
    display: flex;
    margin: 2rem 0 2rem 0;
    @media (max-width: 1300px) {
        display: block;
    }
`;

export default SplitContainer;
