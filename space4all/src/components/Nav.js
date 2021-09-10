import styled from "style-components"

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>Home</li>
                <li>Images</li>
                <li>Checklist</li>
                <li>Resources</li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav `
    background-color: white;
    box-shadow: 0 0 5px black;
`
export default Nav;