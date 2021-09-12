import React from "react";

//Styled Components
import styled from "styled-components";

const Image = (props) => {
    const { imageSrc, altText, height, width, margin } = props;
    return (
        <StyledImageContainer margin={margin}>
            <StyledImage
                src={imageSrc}
                alt={altText}
                height={height}
                width={width}
            />
        </StyledImageContainer>
    );
};

const StyledImageContainer = styled.div`
    width: 100%;
    justify-content: center;
    padding: ${(props) => (props.margin ? props.margin : "0 2rem")};
`;

const StyledImage = styled.img``;

export default Image;
