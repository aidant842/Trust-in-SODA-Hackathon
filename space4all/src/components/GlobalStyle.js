import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
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
}
`
export default GlobalStyle