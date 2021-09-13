import React from "react";
// Components
import Image from "../components/Image";
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import HR from "../components/UI/HR";
import ProductCard from "../components/Products/ProductCard";
import { Products } from "../components/Products/Products";

// Images
import logo from "../static/images/logo.png";
import accessories_header from "../static/images/accessories_header.png";

// Styled Components
import styled from "styled-components";

//Custom Hooks

import useWindowDimensions from "../Hooks/useWindowDimenstions";

const Page4 = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <Image
                imageSrc={accessories_header}
                altText="A banner displaying all of the different accessories and products listed in more detail below."
                width={width >= 768 ? "50%" : "80%"}
                height="auto"
            />
            <HR />
            <TextWithHeader
                heading="RESOURCES AND ACCESSORIES"
                text="By taking some time to address areas of the workstation and surrounds the benefits to the user and the company are so much. The following are a handful of options that are easily implemented and benefit a number of different type of users with varying disabilities from physical to the invisible addressing neurodiversity."
            />
            {Products.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        imageSrc={product.imageSrc}
                        altText={product.altText}
                        imgWidth={product.imgWidth}
                        imgHeight={product.imgHeight}
                        heading={product.heading}
                        text={product.text}
                    />
                );
            })}
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
    margin: 4rem 0;
`;

export default Page4;
