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
import poor from "../static/images/poor.png";
import good from "../static/images/good.png";
import narrowVs from "../static/images/narrowVs.png";
import wideVs from "../static/images/wideVs.png";

//Custom Hooks
import useWindowDimensions from "../Hooks/useWindowDimenstions";

const Page2 = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <h2>Heading</h2>
            <SplitContainer>
                <Image
                    imageSrc={good}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={narrowVs}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={poor}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "65%" : "35%"}
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

/* const StyledSplitContainer = styled(SplitContainer)`
    display: flex !important;
    @media (max-wdith: 700px) {
        display: block !important;
    }
`; */

export default Page2;
