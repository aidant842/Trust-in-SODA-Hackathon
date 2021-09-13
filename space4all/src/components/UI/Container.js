import styled from "styled-components";

const Container = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div`
    width: 85%;
    text-align: center;
    margin: 4rem auto;
`;

export default Container;
