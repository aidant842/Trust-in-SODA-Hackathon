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

    const green = "#BDD9C0";
    const blue = "#507c8d";
    const dblueish = "#2a4147";

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
                                    color:
                                        pathname === item.to ? dblueish : blue,
                                }}
                            >
                                {item.title}
                            </Link>
                            <Line
                                transition={{ duration: 0.75 }}
                                initial={{ width: "0%" }}
                                animate={{
                                    width: pathname === item.to ? "75%" : "0%",
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
    height: 113.5px;
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: var(--green);
    box-shadow: 0 0 5px black;
    position: sticky;
    top: 0;
    z-index: 100;
    a {
        text-shadow: white 0px 0px 5px;
        font-size: 1.2rem;
        font-weight: 700;
        text-decoration: none;
        :hover {
            color: var(--d-blueish) !important;
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
        width: 240px;
        text-align: end;
        padding-left: 10rem;
        position: relative;
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: var(--d-blueish);
    width: 0%;
    position: absolute;
    bottom: -60%;
    left: 50%;
`;

export default Nav;
