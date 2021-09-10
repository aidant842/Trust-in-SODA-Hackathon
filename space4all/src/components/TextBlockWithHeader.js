import React from "react";

//Styled Components
import styled from "styled-components";

const TextBlockWithHeader = (props) => {
    const { heading, text, className } = props;
    return (
        <StyledTextBlock className={className}>
            <h4>{heading}</h4>
            <p>{text}</p>
        </StyledTextBlock>
    );
};

const StyledTextBlock = styled.div``;

export default TextBlockWithHeader;
