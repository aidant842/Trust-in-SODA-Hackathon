import React from "react";

//Styled Components
import styled from "styled-components";

const HR = () => {
    return <StyledHr></StyledHr>;
};

const StyledHr = styled.div`
    background-color: var(--d-blueish);
    height: 2px;
    width: 20%;
    margin: 2rem auto;
`;

export default HR;
