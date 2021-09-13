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

//Animations
import { pageAnimation } from "../components/animation";
import { motion } from "framer-motion";

const Page3 = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <TextWithHeader heading="Inclusive Office Checklist" text="" />
            <Image
                imageSrc={checklistImg}
                altText="An icon image depicting a clipboard with a checklist on it."
                height="auto"
                width="50%"
            />
            <HR />
            <TextWithHeader
                heading="Is your work place accessible and inclusive for the following types of disability?"
                text="Use the checklist below to help identify the areas that you could improve and design considerations you could implement to improve the inclusiveness of your work space."
            />
            <Checklist />
        </motion.div>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;
export default Page3;
