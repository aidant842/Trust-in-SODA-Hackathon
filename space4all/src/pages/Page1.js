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
import benefitsHomepage from "../static/images/benefitsHomepage.png";
import inclusionDiversityWorkplace from "../static/images/inclusionDiversityWorkplace.jpg";

//Custom Hooks
import useWindowDimensions from "../Hooks/useWindowDimenstions";

const Page1 = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <SplitContainer>
                <TextWithHeader
                    heading="First Heading"
                    text="space4ALL promotes awareness and provides solutions to enhance accessibility through diversity, inclusion and equality in the workplace environment. 
                    Employees are more involved with their work and team, which means they are more likely to stay with a company resulting in higher retention rates.
                    At an early stage in recruitment it is important to highlight how issues relating to inclusion, disabilities, be it physical or neurodivergent are managed to ensure a positive experience in the world place.
                    Highlighting services, structures and resources that are implemented in the company shows the interest in the employee experience."
                />
                {/* <Image
                    imageSrc={logo}
                    altText="Logo"
                    height="50px"
                    width="50px"
                /> */}
            </SplitContainer>

            <HR />

            <SplitContainer>
                <Image
                    imageSrc={inclusionDiversityWorkplace}
                    altText="Logo"
                    height="auto"
                    width="100%"
                />
                <TextWithHeader
                    heading="WHAT IS WORKPLACE INCLUSION, DIVERSION AND EQUALITY?"
                    text="Any dimension that can be utilized to distinguish groups and persons from one another is referred to be diversity. 
                    It is about empowering people by valuing and accepting their differences, such as age, gender, race, religion, disability, sexual orientation, education, and national origin.
                    Inclusion refers to an organizational endeavor and procedures in which different groups or individuals from various backgrounds are culturally and socially accepted, welcomed, and treated equally."
                />
            </SplitContainer>

            <HR />

            <SplitContainer>
                <Image
                    imageSrc={diversity}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "100%" : "85%"}
                />
                <Image
                    imageSrc={inclusion}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "100%" : "85%"}
                />
                <Image
                    imageSrc={equality}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "100%" : "85%"}
                />
            </SplitContainer>
            <HR />
            <SplitContainer>
                <Image
                    imageSrc={benefitsHomepage}
                    altText="Logo"
                    height="auto"
                    width={width >= 1300 ? "100%" : "85%"}
                />
                <TextWithHeader
                    heading="BENEFITS OF A DIVERSE AND INCLUSIVE WORKFORCE"
                    text="When taking the effort to address understanding, attitudes and areas of office surroundings to provide for disabilities both visible and hidden, the benefits to the individual and the firm are immense. 
                    Increased productivity and stress reduction are two of these advantages.
                    According to Boston Consulting Group data, firms with diverse teams have 19 percent higher revenue and beat industry standards by 35 percent (as revealed by McKinsey's research)."
                    resources={[
                        {
                            title: "Boston Consulting Group",
                            url: "https://www.bcg.com/en-us/publications/2018/how-diverse-leadership-teams-boost-innovation",
                        },
                        {
                            title: "McKinsey's research",
                            url: "https://www.mckinsey.com/business-functions/organization/our-insights/why-diversity-matters?source=post_page",
                        },
                    ]}
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
