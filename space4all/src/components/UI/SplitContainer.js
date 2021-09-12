import React from "react";

//Styled Components
import styled from "styled-components";

const SplitContainer = ({ className, breakpoint, children }) => {
    return (
        <StyledHalfWidth className={className} breakpoint={breakpoint}>
            {children}
        </StyledHalfWidth>
    );
};
const StyledHalfWidth = styled.div`
    display: flex;
    margin: 4rem 0;
    @media (max-width: ${(props) =>
            props.breakpoint ? props.breakpoint : "1300px"}) {
        display: block;
    }
`;

export default SplitContainer;
