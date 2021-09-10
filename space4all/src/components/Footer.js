import styled from "styled-components"
//Images
import logo from "../static/images/logo.png"

const Footer = () => {
    return (
        <StyledFooter>
            
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
    ul{
        display: flex;
        background-color: white;
        box-shadow: 0 0 5px black;
        list-style: none;
        li {
            margin: auto;
            img{
                height: 50px;
                width: 50px;
            }
            a{
                cursor: pointer;
                color: var(--blue);
                /* text-shadow: 0 0 2px var(--d-blueish); */
                text-decoration: unset;
                :hover{
                    font-size: 1.2rem;
                    color: var(--red);
                }
            }
        }
    }
`
export default Nav;