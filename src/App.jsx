import React from "react"
import styled from "styled-components"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
`

const Main = styled.main`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`

const App = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<About />
				<Portfolio />
			</Main>
			<Footer />
		</Wrapper>
	)
}

export default App
