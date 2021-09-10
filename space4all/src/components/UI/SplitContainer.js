import React from "react";

//Styled Components
import styled from "styled-components";

const SplitContainer = ({ children }) => {
    return <HalfWidth>{children}</HalfWidth>;
};

const HalfWidth = styled.div`
    display: flex;
    margin: 2rem 0 2rem 0;
`;

export default SplitContainer;
