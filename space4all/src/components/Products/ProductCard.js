import React from "react";
// Components
import Image from "../Image";
import TextBlockWithHeader from "../TextBlockWithHeader";
import SplitContainer from "../UI/SplitContainer";

// Styled Components
import styled from "styled-components";

const ProductCard = (props) => {
    const { url, imageSrc, altText, imgWidth, imgHeight, heading, text } =
        props;
    return (
        <StyledCard>
            <a href={url} target="_blank" rel="noreferrer">
                <SplitContainer>
                    <Image
                        imageSrc={imageSrc}
                        altText={altText}
                        width={imgWidth}
                        height={imgHeight}
                    />
                    <StyledTextWithHeader heading={heading} text={text} />
                </SplitContainer>
            </a>
        </StyledCard>
    );
};

const StyledTextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;

const StyledCard = styled.div`
    width: 100%;
    max-height: 300px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.35);
    transition: transform 0.3s ease-in-out 25ms;
    a {
        text-decoration: none;
        color: black;
    }
    &:hover {
        transform: scale(1.02);
    }
`;

export default ProductCard;
