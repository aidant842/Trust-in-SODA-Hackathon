import React from "react";

//Styled Components
import styled from "styled-components";

const TextBlockWithHeader = (props) => {
    const { heading, text, className, resources, ariaLabel } = props;

    return (
        <StyledTextBlock className={className} aria-label={ariaLabel}>
            <h4>{heading}</h4>
            <p>{text}</p>
            {resources ? (
                <StyledResourcesContainer>
                    <h5>Resources:</h5>
                    <ul>
                        {resources.map((resource, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {resource.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </StyledResourcesContainer>
            ) : (
                ""
            )}
        </StyledTextBlock>
    );
};

const StyledTextBlock = styled.div`
    h4 {
        padding-bottom: 1rem;
    }
`;

const StyledResourcesContainer = styled.div`
    margin: 2rem 0;
    ul {
        list-style: none;
    }
`;

export default TextBlockWithHeader;
