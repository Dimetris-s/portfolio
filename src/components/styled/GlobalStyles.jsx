import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`


html,
body {
  font-family: "Aradora Pro", "Roboto", Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
`
export default GlobalStyles
