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
import braille from "../static/images/braille.png";
import quiet from "../static/images/quiet.png";
import furniture from "../static/images/furniture.png";
import lifts from "../static/images/lifts.png";
import toilet from "../static/images/toilet.png";
import decor from "../static/images/decor.png";
import desks from "../static/images/desks.png";
import parking from "../static/images/parking.png";

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
                    altText="A smiley face with the word 'good' beneath"
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={narrowVs}
                    altText="A large letter V to represent versus."
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
                <Image
                    imageSrc={poor}
                    altText="A smiley face with the word 'good' beneath."
                    height="auto"
                    margin="0"
                    width={width >= 576 ? "65%" : "35%"}
                />
            </SplitContainer>
            <HR />
            <TextWithHeader
                heading="Design Considerations"
                text="It is important that the working environment is accessible for all employees. Whilst there are many things that companies can do to help create an inclusive environment such as flexible working options, good insurance, and creating a diverse and inclusive culture, the physical environment is just as important. Below are some important design considerations for an office space to ensure that the majority of employees can enjoy a safe, accessible and positive working environment."
            />
            <SplitContainer breakpoint="576px">
                <ImageWithHeader
                    imageSrc={corridoor}
                    altText="An icon image depicting a corridor."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Corridors and Floor Space"
                    text="Corridors and floor spaces should have a width of at least 1.5m where possible to allow for two passing wheelchairs. It is important to keep corridors and floor spaces clutter free with minimal furniture obstructing the path such as placing water fountains in recesses within the wall, or in an open part of the office instead of floor spaces and corridors. Ideally, there should be enough room for a wheelchair user to turn around in their wheelchair (180 degrees)."
                />
                <ImageWithHeader
                    imageSrc={ramp}
                    altText="An icon image depicting a ramp."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Steps and Ramps"
                    text="Where there is a slope of 1.2m or more, both steps and ramps should be available for access. Guidelines can be places on the end of stairs to ensure that the edge of each step is clearly visible. These lines should be painted in a clear, bold, and contrasting colour to ensure maximum visibility. Handrails should be used where possible."
                />
                <ImageWithHeader
                    imageSrc={doorHandle}
                    altText="An icon image depicting a door handle."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Door Handles"
                    text="Open access rooms, or automatic doors are the ideal design solution for entrances and exits to rooms and buildings. Where these cannot be implemented, suitable door handles should be placed and clearly labelled whether they are push and pull. They should be set to a height suitable for wheelchair users and accessible for those with limited dexterity, for example lever door handles instead of knobs."
                />
            </SplitContainer>
            <SplitContainer breakpoint="576px">
                <ImageWithHeader
                    imageSrc={lighting}
                    altText="An icon image depicting a lamp."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Lighting / Windows"
                    text="Within the office space you want to maximise natural light through large windows. Where there are darker areas of the office, artificial light should be provided through lamps and ceiling lights. Lighting should be evenly dispersed with minimal difference in illumination levels and at an appropriate level of brightness. It is good to avoid glossy and reflective surfaces to prevent shimmers and glares which can be disorienting and distracting. Keep switches at an accessible height."
                />
                <ImageWithHeader
                    imageSrc={braille}
                    altText="An icon image depicting a sign with braille beneath."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Signs"
                    text="All signs should be in a clear and legible sans-serif font. Entrances and exits should be clearly labelled with imagery to assist following standard conventions. Include braille signs/buttons where possible to help those with visual difficulties. Signs and directions should not rely on colour, text or imagery alone, but at least two of these in conjunction with one another."
                />
                <ImageWithHeader
                    imageSrc={quiet}
                    altText="An icon image depicting a speaker crossed through to represent quiet."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Quiet / Peaceful Areas"
                    text="Quiet, peaceful, and private areas should be accessible within the work premises. This allows for employees to have a restful and peaceful area to go to if they are suffering from sensory overload but can also be used as a place for quiet reflection and private religious use such as praying."
                />
            </SplitContainer>
            <SplitContainer breakpoint="576px">
                <ImageWithHeader
                    imageSrc={furniture}
                    altText="An icon image depicting a range of office furniture including a desk, chair, computer, and lamp."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Accessories / Furniture"
                    text="There are multiple accessories and products that can be utilised within a working environment. Ergonomic furniture can help employees with physical disabilities, or those working long hours sitting in the same place. Standing desks that are completely adjustable can help with posture for long hours sat down. There are also multiple accessories such as noise cancelling headphones and reading assists to help those with sensory triggers or learning disabilities."
                />
                <ImageWithHeader
                    imageSrc={lifts}
                    altText="An icon image depicting a lift with a person in it and buttons to the right."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Lifts / Escalators"
                    text="Wherever there are multiple levels in a working environment and ramps would be unsuitable, lifts and/or escalators should be in place for those with physical disabilities. Buttons should be at an accessible height for all, with braille options or embossed signs. It is important to remember that not all physical disabilities are visible, and stairs may be a challenge for those that do not use any walking aids or wheelchairs and thus should be open to all."
                />
                <ImageWithHeader
                    imageSrc={toilet}
                    altText="An icon image depicting a toilet door with the word 'toilet' on the front."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Toilets"
                    text="Toilets should always be available and accessible to all colleagues with appropriate access and privacy. You could opt for unisex toilets to allow for all gender identities to be comfortable or split them into the traditional binary male and female options. Disabled toilets should be available at any place of work with an emergency lever cord for them to be able to pull for assistance or in case of an emergency."
                />
            </SplitContainer>
            <SplitContainer breakpoint="576px">
                <ImageWithHeader
                    imageSrc={decor}
                    altText="An icon image depicting a paint roller decorating on a wall to represent décor."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Décor"
                    text="The décor of the office should be minimalistic and clear. If colours are being utilised they should be clearly contrasting and accessible to people with colour blindness which can be checked with online sources such as Adobe Colour. Routes could be shown via lines on the floor and appropriate signage. Spaces and defined areas should not be identifiable by colour, text or imagery alone, but a mixture of at least two of these."
                />
                <ImageWithHeader
                    imageSrc={desks}
                    altText="An icon image depicting two desks facing one another."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Desks and Workstations"
                    text="Work stations should be as clutter free as possible, with minimal sensory triggers. Where possible, it is best to have desks facing one another as opposed to side-to-side or back-to-back. With desks facing one another, it is easier for those with hearing disabilities to communicate with one another as it allows for sign language, lip reading and visual queues to be seen more easily."
                />
                <ImageWithHeader
                    imageSrc={parking}
                    altText="An icon image depicting a parking sign with a car one side and a wheelchair user on the the oher."
                    height="auto"
                    width={width >= 576 ? "75%" : "65%"}
                    heading="Parking"
                    text="Where possible, it is good to having parking nearby or on company premises. It is ideal to have designated disabled parking bays closest to the office to minimise the commute and journey for employees with a disability. Ensure that the car park is well lit and safe for all users with wide parking bays, clear directions and safe pathways."
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
