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

// Router
import { useLocation, Switch, Route } from "react-router-dom";
import Container from "./components/UI/Container";

//Custom Hooks
import useWindowDimensions from "./Hooks/useWindowDimenstions";

//Framer Motion
import { AnimatePresence } from "framer-motion";

function App() {
    //Variables
    const location = useLocation();
    const { width } = useWindowDimensions();

    //State
    const [showSettings, setShowSettings] = useState();
    const [settingsAnimating, setSettingsAnimating] = useState(false);

    //Handlers

    const showSettingsHandler = () => {
        setShowSettings((prevState) => !prevState);
        setSettingsAnimating((prevState) => !prevState);
    };
    const [fontSize, setFontSize] = useState(1.2);

    const fontIncreaseHandler = () => {
        return setFontSize((prevState) => (prevState += 0.2));
    };
    const fontDecreaseHandler = () => {
        return setFontSize((prevState) => (prevState -= 0.2));
    };

    return (
        <div
            className="App"
            style={{
                fontSize: `${fontSize}rem`,
                lineHeight: `calc(1rem * ${fontSize * 1.5})`,
                letterSpacing: `calc(0.1rem * ${fontSize})`,
            }}
        >
            <GlobalStyle />
            {width >= 1300 ? <Nav /> : <MobileNav />}
            <Widget
                onClick={showSettingsHandler}
                settingsAnimating={settingsAnimating}
            />
            <AnimatePresence>
                {showSettings && (
                    <AcessibilitySettings
                        onClick={showSettingsHandler}
                        fontIncrease={fontIncreaseHandler}
                        fontDecrease={fontDecreaseHandler}
                    />
                )}
            </AnimatePresence>
            <Container>
                <Switch location={location} key={location.pathname}>
                    {/* Add exact otherwise other urls that begin with a / will be rendered on that page */}
                    <Route path="/" exact>
                        <Page1 />
                    </Route>
                    <Route path="/images" exact>
                        <Page2 />
                    </Route>
                    <Route path="/checklist">
                        <Page3 />
                    </Route>
                    <Route path="/resources" exact>
                        <Page4 />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
