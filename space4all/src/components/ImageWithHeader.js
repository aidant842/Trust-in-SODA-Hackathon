import React from "react";

//Styled Components
import styled from "styled-components";

const ImageWithHeader = (props) => {
    const { imageSrc, altText, height, width, heading, text } = props;
    return (
        <ImageContainer>
            <h4>{heading}</h4>
            <StyledImage
                src={imageSrc}
                alt={altText}
                height={height}
                width={width}
            />
            <p>{text}</p>
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    justify-content: center;
`;

const StyledImage = styled.img``;

export default ImageWithHeader;
