import React from "react";
//Styled Components
import styled from "styled-components";

// Components
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import Image from "../components/Image";
import HR from "../components/UI/HR";
import Checklist from "../components/Checklist/Checklist";

//Images
import checklistImg from "../static/images/checklist.png";

const Page3 = () => {
    return (
        <>
            <TextWithHeader heading="Inclusive Office Checklist" text="" />
            <Image
                imageSrc={checklistImg}
                altText="An icon image depicting a clipboard with a checklist on it."
                height="auto"
                width="50%"
                ariaLabel="An icon image depicting a clipboard with a checklist on it."
            />
            <HR />
            <TextWithHeader
                heading="Is your work place accessible and inclusive for the following types of disability?"
                text="Use the checklist below to help identify the areas that you could improve and design considerations you could implement to improve the inclusiveness of your work space."
            />
            <Checklist />
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;
export default Page3;
