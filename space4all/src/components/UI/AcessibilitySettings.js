import React from "react";

//styled components
import styled from "styled-components";

//components
import Button from "./Button";

//Framer Motion
import { motion } from "framer-motion";

//Custom Hooks
import useWindowDimensions from "../../Hooks/useWindowDimenstions";

const AcessibilitySettings = ({
    showSettingsHandler,
    resetSettingsHandler,
    fontIncrease,
    fontDecrease,
    highlightLinksHandler,
    largeCursorHandler,
    highlightLinks,
    largeCursor,
    darkModeHandler,
    darkMode,
}) => {
    const { screenWidth } = useWindowDimensions();
    return (
        <StyledPopOut
            width={screenWidth}
            initial={{ width: 0, opacity: 0 }}
            animate={{
                width: screenWidth <= 768 ? "100%" : "500px",
                opacity: 1,
            }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ delay: 0.15 }}
        >
            <div className="btns">
                <Button
                    onClick={showSettingsHandler}
                    text="Close"
                    className="closeBtn"
                />
                <Button
                    onClick={resetSettingsHandler}
                    text="Reset Settings"
                    className="resetBtn"
                />
            </div>

            <StyledFontContainer>
                <h5>Font Settings</h5>
                <div className="fontBtns">
                    <Button text="A -" onClick={fontDecrease} />
                    <Button text="A +" onClick={fontIncrease} />
                </div>
            </StyledFontContainer>
            <form>
                <div className="form-group">
                    <label htmlFor="links">Highlight Links</label>
                    <input
                        type="checkbox"
                        name="links"
                        id="links"
                        onChange={highlightLinksHandler}
                        checked={highlightLinks}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cursor">Large Cursor</label>
                    <input
                        type="checkbox"
                        name="cursor"
                        id="cursor"
                        onChange={largeCursorHandler}
                        checked={largeCursor}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="darkMode">Dark Mode</label>
                    <input
                        type="checkbox"
                        name="darkMode"
                        id="darkMode"
                        onChange={darkModeHandler}
                        checked={darkMode}
                    />
                </div>
            </form>
        </StyledPopOut>
    );
};

const StyledPopOut = styled(motion.div)`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: ${(props) => (props.width >= 768 ? "100%" : "500px")};
    background-color: var(--d-blueish);
    padding: 2rem;
    text-align: center;
    z-index: 9999;
    color: white;
    box-shadow: 0 0 10px black;

    .btns {
        display: flex;
        justify-content: space-around;
    }

    .form-group {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        padding: 0 2rem;
        input[type="checkbox"] {
            accent-color: var(--green);
            width: 20px;
            height: 20px;
        }
    }
`;

const StyledFontContainer = styled.div`
    border: 1px solid var(--blue);
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    .fontBtns {
        button {
            margin: 1rem;
        }
    }
`;

export default AcessibilitySettings;
