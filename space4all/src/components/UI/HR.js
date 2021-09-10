import React from "react";

//Styled Components
import styled from "styled-components";

const HR = () => {
    return <HrEl></HrEl>;
};

const HrEl = styled.div`
    background-color: var(--d-blueish);
    height: 2px;
    width: 20%;
    margin: 0 auto;
`;

export default HR;
