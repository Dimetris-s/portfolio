import React from "react"
import styled from "styled-components"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import ScrollUp from "./components/ScrollUp"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	position: relative;
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
			<ScrollUp />
		</Wrapper>
	)
}

export default App
