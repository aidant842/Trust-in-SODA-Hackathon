import React from "react";

//Styled Components
import styled from "styled-components";

//Icons
import { FaRegEye } from "react-icons/fa";

//Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Widget = ({ onClick, style, settingsAnimating }) => {
    const animation = { right: 500 };

    return (
        <AnimatePresence>
            <StyledWidget
                onClick={onClick}
                style={style}
                initial={{ right: 0 }}
                animate={settingsAnimating ? animation : {}}
                exit={{ right: 0 }}
                transition={{ delay: 0.15 }}
            >
                <FaRegEye className="accessWidget" color="white" />
            </StyledWidget>
        </AnimatePresence>
    );
};

const StyledWidget = styled(motion.button)`
    height: 50px;
    width: 50px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0px;
    top: 113.5px;
    z-index: 10;
    border: none;
    cursor: pointer;
    img {
        width: 60px;
        height: 60px;
    }
    @media (max-width: 1300px) {
        top: 81.5px;
    }

    .accessWidget {
        font-size: 2rem;
    }
`;

export default Widget;
