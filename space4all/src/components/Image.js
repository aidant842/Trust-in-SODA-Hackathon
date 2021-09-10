import React from "react";

//Styled Components
import styled from "styled-components";

const Image = (props) => {
    const { imageSrc, altText, height, width } = props;
    return (
        <ImageContainer>
            <StyledImage
                src={imageSrc}
                alt={altText}
                height={height}
                width={width}
            />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    justify-content: center;
`;

const StyledImage = styled.img``;

export default Image;
