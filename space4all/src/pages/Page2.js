import React from "react";

//Styled Components
import styled from "styled-components";

// Components
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import Image from "../components/Image";
import SplitContainer from "../components/UI/SplitContainer";
import HR from "../components/UI/HR";
import ImageWithHeader from "../components/ImageWithHeader";

//Images
import logo from "../static/images/logo.png";
const Page2 = () => {
    return (
        <>
            <h2>Heading</h2>
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
            <TextWithHeader heading="Heading 1" text="paragraph 1" />
            <Image imageSrc={logo} altText="Logo" height="auto" width="100%" />
            <HR />
            <TextWithHeader heading="Heading 2" text="paragraph 2" />
            <Image imageSrc={logo} altText="Logo" height="auto" width="100%" />
            <HR />
            <SplitContainer>
                <ImageWithHeader
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                    heading="Heading 1"
                    text="paragraph 1"
                />
                <ImageWithHeader
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                    heading="Heading 2"
                    text="paragraph 2"
                />
                <ImageWithHeader
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                    heading="Heading 3"
                    text="paragraph 3"
                />
            </SplitContainer>
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;

export default Page2;
