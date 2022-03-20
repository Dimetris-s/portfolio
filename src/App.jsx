import React from "react"
import styled from "styled-components"
import { About, Header, Footer, Portfolio } from "./components/sections"
import ScrollUp from "./components/common/ScrollUp/ScrollUp"

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
