import React from "react";

//Styled Components
import styled from "styled-components";

const Video = ({ videoSrc }) => {
    return (
        <StyledVideoContainer>
            <iframe
                width="560"
                height="315"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </StyledVideoContainer>
    );
};

const StyledVideoContainer = styled.div`
    width: 100%;
    height: 100%;
    iframe {
        width: 80%;
        @media (max-width: 1300px) {
            width: 100%;
        }
    }
    @media (max-width: 1300px) {
        margin-top: 2rem;
    }
`;

export default Video;
