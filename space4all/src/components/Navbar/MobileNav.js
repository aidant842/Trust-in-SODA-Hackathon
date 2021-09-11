import { useState } from "react";
// Styled Components
import styled from "styled-components";
//Images
import logo from "../../static/images/logo.png";
// Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//nav links
import { MenuItems } from "./MenuItems";
//React icons
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
    const { pathname } = useLocation();
    // variables
    const red = "#e03f42";
    const blue = "#62a3d1";

    const [open, setOpen] = useState(false);

    const openMenuHandler = () => {
        setOpen((prevState) => {
            return !prevState;
        });
    };

    return (
        <StyledNav>
            <h1>
                <Link to="/">
                    <img src={logo} alt="Space for All Logo" id="logo"></img>
                </Link>
            </h1>
            <GiHamburgerMenu className="navButton" onClick={openMenuHandler} />
            <AnimatePresence>
                {open && (
                    <motion.ul
                        variants={{
                            a: { width: "0%" },
                            b: { width: "50%" },
                        }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 500, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        {MenuItems.map((item, index) => {
                            return (
                                <motion.li
                                    key={index}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0 }}
                                >
                                    <Link
                                        to={item.to}
                                        style={{
                                            color:
                                                pathname === item.to
                                                    ? "#b8d8be"
                                                    : "#62a3d1",
                                        }}
                                        onClick={openMenuHandler}
                                    >
                                        {item.title}
                                    </Link>
                                    <Line
                                        transition={{ duration: 0.75 }}
                                        initial={{ width: "0%" }}
                                        animate={{
                                            width:
                                                pathname === item.to
                                                    ? "50%"
                                                    : "0%",
                                        }}
                                    />
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </StyledNav>
    );
};
const StyledNav = styled.nav`
    display: none;
    height: 81.5px;
    margin: auto;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
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
        flex-direction: column;
        list-style: none;
        height: 500px;
        position: absolute;
        top: 81.5px;
        width: 100%;
        background-color: var(--d-blueish);
        justify-content: center;
        align-items: center;
    }

    li {
        position: relative;
        padding: 1rem 0;
    }

    #logo {
        position: absolute;
        top: 8%;
        left: 10%;
        height: 75px;
        width: 75px;
    }
    .navButton {
        position: absolute;
        right: 10%;
        font-size: 2rem;
        color: var(--blue);
        z-index: 5;
        cursor: pointer;
    }
    @media (max-width: 1300px) {
        display: flex;
    }
`;

const Line = styled(motion.div)`
    position: absolute;
    height: 0.3rem;
    background-color: var(--red);
    width: 0%;
    bottom: 1%;
    left: 65%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`;

export default MobileNav;
