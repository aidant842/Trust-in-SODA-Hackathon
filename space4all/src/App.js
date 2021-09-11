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

// Router
import { useLocation, Switch, Route } from "react-router-dom";
import Container from "./components/UI/Container";

//Custom Hooks
import useWindowDimensions from "./Hooks/useWindowDimenstions";

function App() {
    //Variables
    const location = useLocation();
    const { width } = useWindowDimensions();
    return (
        <div className="App">
            <GlobalStyle />
            {width >= 1300 ? <Nav /> : <MobileNav />}
            {/* <Nav />
            <MobileNav /> */}
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
