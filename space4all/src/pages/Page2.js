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
import corridoor from "../static/images/corridoor.png";
import lighting from "../static/images/lighting.png";
import doorHandle from "../static/images/doorHandle.png";
import ramp from "../static/images/ramp.png";

//Custom Hooks
import useWindowDimensions from "../Hooks/useWindowDimenstions";

const Page2 = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <h2>Creating an Inclusive and Accessible Office Space</h2>
            <SplitContainer breakpoint="576px">
                <Image
                    imageSrc={good}
                    altText="Logo"
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={narrowVs}
                    altText="Logo"
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={poor}
                    altText="Logo"
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
            </SplitContainer>
            <HR />
            <TextWithHeader heading="Design Considerations" text="paragraph 1It is important that the working environment is accessible for all employees. Whilst there are many things that companies can do to help create an inclusive environment such as flexible working options, good insurance, and creating a diverse and inclusive culture, the physical environment is just as important. Below are some important design considerations for an office space to ensure that the majority of employees can enjoy a safe, accessible and positive working environment." />
            <SplitContainer breakpoint="576px">
                <ImageWithHeader
                    imageSrc={corridoor}
                    altText="Logo"
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Corridors and Floor Space"
                    text="Corridors and floor spaces should have a width of at least 1.5m where possible to allow for two passing wheelchairs. It is important to keep corridors and floor spaces clutter free with minimal furniture obstructing the path such as placing water fountains in recesses within the wall, or in an open part of the office instead of floor spaces and corridors. Ideally, there should be enough room for a wheelchair user to turn around in their wheelchair (180 degrees)."
                />
                <ImageWithHeader
                    imageSrc={lighting}
                    altText="Logo"
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Heading 2"
                    text="paragraph 2"
                />
                <ImageWithHeader
                    imageSrc={doorHandle}
                    altText="Logo"
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
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
