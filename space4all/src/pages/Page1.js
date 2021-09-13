import React from "react";
//Styled Components
import styled from "styled-components";
// Components
import TextBlockWithHeader from "../components/TextBlockWithHeader";
import Image from "../components/Image";
import SplitContainer from "../components/UI/SplitContainer";
import HR from "../components/UI/HR";
import Video from "../components/Video";

//Images
import diversity from "../static/images/diversity.png";
import equality from "../static/images/equality.png";
import inclusion from "../static/images/inclusion.png";
import benefitsHomepage from "../static/images/benefitsHomepage.png";
import inclusionDiversityWorkplace from "../static/images/inclusionDiversityWorkplace.jpg";

//Custom Hooks
import useWindowDimensions from "../Hooks/useWindowDimenstions";

const Page1 = () => {
    const { screenWidth } = useWindowDimensions();
    return (
        <>
            <SplitContainer>
                <TextWithHeader
                    heading="Addressing Workplace Accessibility"
                    text="space4ALL promotes awareness and provides solutions to enhance accessibility through diversity, inclusion and equality in the workplace environment. 
                    Employees are more involved with their work and team, which means they are more likely to stay with a company resulting in higher retention rates.
                    At an early stage in recruitment it is important to highlight how issues relating to inclusion, disabilities, be it physical or neurodivergent are managed to ensure a positive experience in the world place.
                    Highlighting services, structures and resources that are implemented in the company shows the interest in the employee experience."
                />
                <Video videoSrc="https://www.youtube.com/embed/cX9Z0Qr5e74" />
            </SplitContainer>

            <HR />

            <SplitContainer>
                <Image
                    imageSrc={inclusionDiversityWorkplace}
                    altText="Cartoon image depicting numerous different people working, from diverse backgrounds."
                    height="auto"
                    width="100%"
                />
                <TextWithHeader
                    heading="What is workplace inclusion, diversion and equality?"
                    text="Any dimension that can be utilized to distinguish groups and persons from one another is referred to be diversity. 
                    It is about empowering people by valuing and accepting their differences, such as age, gender, race, religion, disability, sexual orientation, education, and national origin.
                    Inclusion refers to an organizational endeavor and procedures in which different groups or individuals from various backgrounds are culturally and socially accepted, welcomed, and treated equally."
                />
            </SplitContainer>

            <StyledUl>
                <li>
                    Get employees to take personality tests and team-up the ones
                    that would work well together.
                </li>
                <li>
                    Focus on experience, hard skills, and soft skills rather
                    than education.
                </li>
                <li>Hire out-of-market candidates.</li>
                <li>
                    Provide an open, supportive, inclusive and empowering
                    environment for everyone to feel comfortable to raise
                    concerns, express individuality, learn new things and
                    communicate effectively.
                </li>
                <li>
                    Provide online translation services or an in-person
                    interpreter for roles that don’t require fluency in a
                    language.
                </li>
                <li>
                    Create Employee Resource Groups for different areas such as
                    LGBTQIA+.
                </li>
            </StyledUl>

            <HR />

            <SplitContainer>
                <Image
                    imageSrc={diversity}
                    altText="Image containing the Oxford Dictionary definition of diversity."
                    height="auto"
                    width={screenWidth >= 1300 ? "100%" : "85%"}
                />
                <Image
                    imageSrc={inclusion}
                    altText="Image containing the Oxford Dictionary definition of inclusion."
                    height="auto"
                    width={screenWidth >= 1300 ? "100%" : "85%"}
                />
                <Image
                    imageSrc={equality}
                    altText="Image containing the Oxford Dictionary definition of equality."
                    height="auto"
                    width={screenWidth >= 1300 ? "100%" : "85%"}
                />
            </SplitContainer>
            <HR />
            <SplitContainer>
                <Image
                    imageSrc={benefitsHomepage}
                    altText="Icon image of a bar chart to depict increasing business and productivity and represent the statistics below."
                    height="auto"
                    width={screenWidth >= 1300 ? "100%" : "85%"}
                />
                <TextWithHeader
                    heading="Benefits of a diverse and inclusive workforce"
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

            <TextWithHeader
                heading=""
                text="Below we highlight ways to create an invlusive workspaceother than the physical space which are addressed in the Design and Accessories pages of the site."
            />

            <StyledUl>
                <li>
                    A diverse workforce allows people with different
                    personalities to collaborate while also challenging each
                    other's ideas and opinions, resulting in increased
                    creativity and new perspectives. The more diverse the
                    brainstorming, the more diverse the solutions, the more
                    diversely productive the team is.
                </li>
                <li>
                    Employees with neurodiversity can have unique and powerful
                    skill sets. Increased ability to recognize patterns or
                    greater information retention, for example.{" "}
                </li>
                <li>
                    Hiring out-of-market people can lead to a variety of new
                    perspectives on the organization, industry, and policies
                    that would not have been noticed otherwise. It may be useful
                    in gaining a better insight and understanding of various
                    businesses and identifying new customer markets.
                </li>
                <li>
                    It might be difficult for others to feel included or fit in
                    a job where the majority of workers are from the same
                    background, ability, gender, etc. These hurdles can be taken
                    down in a more diverse company, which fosters an inclusive
                    culture and empowers all employees equally. Employees will
                    perform better in an inclusive workplace, and there will be
                    less turnover and absenteeism, resulting in higher employee
                    retention than in a heterogeneous workforce.
                </li>
                <li>
                    Providing accommodation services for those with disabilities
                    can help to improve efficiency and reduce time to achieve
                    results. Accommodations include well designed physical
                    workplace layout, accessories such as noise cancelling
                    earphones, workstations with digital services.
                </li>
                <li>
                    When companies are shown to hire a diverse team, it expands
                    recruitment resources, which improve a companies brand's
                    reputation. Diversity binds you to the people around you and
                    makes you more relatable to a wider range of people opening
                    up the recruitment pool.
                </li>
                <li>
                    Companies that embrace these diverse policies profit
                    financially. These could result from a decrease in legal
                    action taken as a consequence of the lack in services being
                    delivered both physically and online. Compliancy needs to be
                    ensured whether it is by meeting layout criteria or adapting
                    websites to suit the accessibility and diversity.{" "}
                </li>
            </StyledUl>
        </>
    );
};

const TextWithHeader = styled(TextBlockWithHeader)`
    text-align: center;
    width: 100%;
`;

const StyledUl = styled.ul`
    li {
        padding: 1.5rem 0;
    }
`;

export default Page1;
