import React from "react";
//Styled Components
import styled from "styled-components";
// Components
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import Image from "../components/Image";
import SplitContainer from "../components/UI/SplitContainer";
import HR from "../components/UI/HR";

//Images
import logo from "../static/images/logo.png";
import diversity from "../static/images/diversity.png";
import equality from "../static/images/equality.png";
import inclusion from "../static/images/inclusion.png";

const Page1 = () => {
    return (
        <>
            <SplitContainer>
                <TextWithHeader
                    heading="First Heading"
                    text="First Paragraph"
                />
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
            </SplitContainer>
            <HR />
            <SplitContainer>
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
                <TextWithHeader
                    heading="Second Heading"
                    text="Second Paragraph"
                />
            </SplitContainer>
            <HR />
            <SplitContainer>
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
            </SplitContainer>
            <HR />
            <SplitContainer>
                <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                />
                <TextWithHeader
                    heading="Second Heading"
                    text="Second Paragraph"
                />
            </SplitContainer>
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;

export default Page1;
