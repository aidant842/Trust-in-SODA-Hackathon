import React from "react";
// Components
import Image from "../components/Image";
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import HR from "../components/UI/HR";
import ProductCard from "../components/Products/ProductCard";
import { Products } from "../components/Products/Products";

// Images
import logo from "../static/images/logo.png";

// Styled Components
import styled from "styled-components";
const Page4 = () => {

    return ( <>
        <Image imageSrc = {logo}
        altText = "logo"
        width = "100%"
        height = "auto" / >
        <HR / >
        <TextWithHeader heading = "Heading 1"
        text = "paragraph 1" / >
        {Products.map((product, index) => {
            return (
                <ProductCard key={index} url={product.url} imageSrc={product.imageSrc} altText={product.altText} imgWidth={product.imgWidth} imgHeight={product.imgHeight} heading={product.heading} text={product.text} />
            )
        })}
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)
`
    text-align: center;
    width: 100%;
`;

export default Page4;