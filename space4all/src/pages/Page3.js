import React from "react";
//Styled Components
import styled from "styled-components";

// Components
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import Image from "../components/Image";
import HR from "../components/UI/HR";
import Checklist from "../components/Checklist/Checklist";

//Images
import logo from "../static/images/logo.png";
import checklistImg from "../static/images/checklist.png";

const Page3 = () => {
    return (
        <>
            <TextWithHeader heading="Heading 1" text="Paragraph 1" />
            <Image
                imageSrc={checklistImg}
                altText="Logo"
                height="auto"
                width="50%"
            />
            <HR />
            <TextWithHeader heading="Heading 2" text="Paragraph 2" />
            <Checklist />
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;
export default Page3;
