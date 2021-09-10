import styled from "styled-components";

const Container = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div`
    width: 85%;
    text-align: center;
    margin: 0 auto;
`;

export default Container;
