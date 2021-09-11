import React from 'react'
// Components
import Image from '../Image'
import TextBlockWithHeader from '../TextBlockWithHeader'
import SplitContainer from '../UI/SplitContainer'

// Styled Components
import styled from "styled-components";

const ProductCard = (props) => {
    const {url, imageSrc, altText, imgWidth, imgHeight, heading, text} = props
    return (
        <StyledCard>
            <a href={url} target="_blank">
        <SplitContainer>
           <Image imageSrc={imageSrc} altText={altText} width={imgWidth} height={imgHeight} />
           <TextWithHeader heading={heading} text={text} />
        </SplitContainer>
            </a>
        </StyledCard>
    )
}


const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;

const StyledCard = styled.div`
    width: 100%;
    max-height: 300px;
`;

export default ProductCard;
