import React from "react";

//Styled Components
import styled from "styled-components";

const TextBlockWithHeader = (props) => {
    const { heading, text, className, resources } = props;

    return (
        <StyledTextBlock className={className}>
            <h4>{heading}</h4>
            <p>{text}</p>
            {resources ? (
                <StyledResourcesContainer>
                    <h5>RESOURCES:</h5>
                    <ul>
                        {resources.map((resource) => {
                            return (
                                <li>
                                    <a href={resource.url}>{resource.title}</a>
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
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
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
