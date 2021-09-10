import style from "styled-components"

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
    box-shadow
`
export default Nav;