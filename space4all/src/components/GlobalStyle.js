import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
:root{
    --red: #e03f42;
    --blue: #62a3d1;
    --d-blueish: #2a4147;
    --blueish-shadow: #2a414773;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Atkinson Hyperlegible', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-weight: bold;
}
`;
export default GlobalStyle;
