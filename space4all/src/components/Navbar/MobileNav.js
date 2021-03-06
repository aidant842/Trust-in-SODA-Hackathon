import { useState } from "react";
// Styled Components
import styled from "styled-components";
//Images
import logo from "../../static/images/space4AllBanner.png";
// Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//nav links
import { MenuItems } from "./MenuItems";
//React icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const MobileNav = ({ bttHandler }) => {
    const { pathname } = useLocation();
    // variables
    const green = "#BDD9C0";
    const blue = "#62a3d1";

    const [open, setOpen] = useState(false);

    const openMenuHandler = () => {
        setOpen((prevState) => {
            return !prevState;
        });
    };
    const openMenuHandlerWithScroll = () => {
        setOpen((prevState) => {
            return !prevState;
        });
        bttHandler();
    };

    return (
        <StyledNav>
            <h1>
                <Link to="/">
                    <img
                        onClick={openMenuHandlerWithScroll}
                        src={logo}
                        alt="Space for All Logo"
                        id="logo"
                    ></img>
                </Link>
            </h1>
            {open ? (
                <GrClose className="navButton" onClick={openMenuHandler} />
            ) : (
                <GiHamburgerMenu
                    className="navButton"
                    onClick={openMenuHandler}
                />
            )}
            <AnimatePresence>
                {open && (
                    <motion.ul
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
                                                    ? green
                                                    : blue,
                                        }}
                                        onClick={openMenuHandlerWithScroll}
                                    >
                                        {item.title}
                                    </Link>
                                    <Line
                                        transition={{ duration: 0.75 }}
                                        initial={{ width: "0%" }}
                                        animate={{
                                            width:
                                                pathname === item.to
                                                    ? "100%"
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
    background-color: var(--green);
    box-shadow: 0 0 5px black;
    position: sticky;
    top: 0;
    z-index: 100;
    a {
        color: var(--blue);
        text-decoration: none;
        :hover {
            color: var(--green) !important;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        height: 300px;
        position: absolute;
        top: 81.5px;
        width: 100%;
        box-shadow: 0 0 5px black;
        background-color: var(--d-blueish);
        justify-content: center;
        align-items: center;
    }

    li {
        font-size: 1.3rem;
        letter-spacing: 1.5px;
        width: 50%;
        margin: auto;
        text-align: center;
        position: relative;
        padding: 1rem 0;
    }

    #logo {
        position: absolute;
        top: 8%;
        left: 10%;
        height: 70px;
        width: 300px;
    }
    .navButton {
        position: absolute;
        right: 10%;
        font-size: 2rem;
        color: var(--d-blueish);
        z-index: 5;
        cursor: pointer;
    }
    @media (max-width: 1300px) {
        display: flex;
    }
    @media (max-width: 460px) {
        #logo {
            top: 20%;
            left: 10%;
            height: 50px;
            width: 200px;
        }
    }
`;

const Line = styled(motion.div)`
    position: absolute;
    height: 0.3rem;
    background-color: var(--green);
    width: 0%;
    bottom: 1%;
    left: 65%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`;

export default MobileNav;
