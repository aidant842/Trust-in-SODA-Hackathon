// Styled Components
import styled from "styled-components";
//Images
import logo from "../../static/images/logo.png";
// Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Framer Motion
import { motion } from "framer-motion";
//nav links
import { MenuItems } from "./MenuItems";

const Nav = () => {
    const { pathname } = useLocation();
    // variables

    const red = "#e03f42";
    const blue = "#62a3d1";

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    <img src={logo} alt="Space for All Logo" id="logo"></img>
                </Link>
            </h1>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={item.to}
                                style={{
                                    color: pathname === item.to ? red : blue,
                                }}
                            >
                                {item.title}
                            </Link>
                            <Line
                                transition={{ duration: 0.75 }}
                                initial={{ width: "0%" }}
                                animate={{
                                    width: pathname === item.to ? "50%" : "0%",
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </StyledNav>
    );
};
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: white;
    box-shadow: 0 0 5px black;
    position: sticky;
    top: 0;
    z-index: 100;
    a {
        color: var(--blue);
        text-decoration: none;
        :hover {
            color: var(--red) !important;
        }
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        height: 75px;
        width: 75px;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        display: none;
        /* flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        } */
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: var(--d-blueish);
    width: 0%;
    position: absolute;
    bottom: -60%;
    left: 65%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`;

export default Nav;
