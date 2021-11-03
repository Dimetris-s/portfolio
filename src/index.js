import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import GlobalStyles from "./components/styled/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./components/styled/theme.js"

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
