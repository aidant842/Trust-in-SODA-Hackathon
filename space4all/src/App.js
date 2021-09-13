import { useState } from "react";

// Styles
import GlobalStyle from "./components/GlobalStyle";

//Pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

//Components
import Nav from "./components/Navbar/Nav";
import MobileNav from "./components/Navbar/MobileNav";
import Footer from "./components/Footer";
import Widget from "./components/Widget";
import AcessibilitySettings from "./components/UI/AcessibilitySettings";
import BttButton from "./components/UI/BttButton";

// Router
import { useLocation, Switch, Route } from "react-router-dom";
import Container from "./components/UI/Container";

//Custom Hooks
import useWindowDimensions from "./Hooks/useWindowDimenstions";

//Framer Motion
import { AnimatePresence } from "framer-motion";

//Styled Components
import styled from "styled-components";

//Cursors
import cursor from "./static/images/largeCursor.png";
import pointer from "./static/images/largePointer.png";

function App() {
    //Variables
    const location = useLocation();
    const { screenWidth, screenScroll } = useWindowDimensions();

    //State
    const [showSettings, setShowSettings] = useState();
    const [settingsAnimating, setSettingsAnimating] = useState(false);
    const [highlightLinks, setHighlightLinks] = useState(false);
    const [largeCursor, setLargeCursor] = useState(false);

    //Handlers

    const showSettingsHandler = () => {
        setShowSettings((prevState) => !prevState);
        setSettingsAnimating((prevState) => !prevState);
    };
    const [fontSize, setFontSize] = useState(1.2);

    const fontIncreaseHandler = () => {
        setFontSize((prevState) => (prevState += 0.2));
    };
    const fontDecreaseHandler = () => {
        setFontSize((prevState) => (prevState -= 0.2));
    };

    const highlightLinksHandler = () => {
        setHighlightLinks((prevState) => !prevState);
    };

    const largeCursorHandler = () => {
        setLargeCursor((prevState) => !prevState);
        console.log("Large Cursor!");
    };

    const resetSettingsHandler = () => {
        setFontSize(1.2);
        setHighlightLinks(false);
        setLargeCursor(false);
    };

    const bttHandler = () => {
        console.log("btt clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <StyledApp
            className="App"
            highlightLinks={highlightLinks}
            fontSize={fontSize}
            largeCursor={largeCursor}
        >
            <GlobalStyle />
            {screenWidth >= 1300 ? <Nav /> : <MobileNav />}
            <Widget
                onClick={showSettingsHandler}
                settingsAnimating={settingsAnimating}
            />
            <AnimatePresence>
                {showSettings && (
                    <AcessibilitySettings
                        showSettingsHandler={showSettingsHandler}
                        resetSettingsHandler={resetSettingsHandler}
                        fontIncrease={fontIncreaseHandler}
                        fontDecrease={fontDecreaseHandler}
                        highlightLinksHandler={highlightLinksHandler}
                        largeCursorHandler={largeCursorHandler}
                        highlightLinks={highlightLinks}
                        largeCursor={largeCursor}
                    />
                )}
            </AnimatePresence>
            <Container>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <Page1 />
                    </Route>
                    <Route path="/design" exact>
                        <Page2 />
                    </Route>
                    <Route path="/checklist">
                        <Page3 />
                    </Route>
                    <Route path="/accessories" exact>
                        <Page4 />
                    </Route>
                </Switch>
            </Container>
            {screenScroll >= 300 ? <BttButton onClick={bttHandler} /> : ""}
            <Footer />
        </StyledApp>
    );
}

const StyledApp = styled.div`
    font-size: ${(props) => `${props.fontSize}rem`};
    line-height: ${(props) => `calc(1rem * ${props.fontSize * 1.5})`};
    letter-spacing: ${(props) => `calc(0.1rem * ${props.fontSize})`};

    cursor: ${(props) =>
        props.largeCursor ? `url(${cursor}), auto` : "cursor"};

    a {
        background-color: ${(props) =>
            props.highlightLinks ? "yellow" : "none"};
        cursor: ${(props) =>
            props.largeCursor ? `url(${pointer}), auto` : "pointer"};
    }
`;

export default App;
