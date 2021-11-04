import React from "react"
import styled from "styled-components"
import Slider from "./Slider"
import Container from "./styled/Container"
import Flex from "./styled/Flex"
import Title from "./styled/Title"
import { slides } from "../utils/data"

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.black};
	padding-top: 100px;
	padding-bottom: 150px;
`
const PortfolioTitle = styled(Title)`
	color: #fff;
	text-align: center;
	margin-bottom: 50px;
`
const Portfolio = () => {
	return (
		<Wrapper id="portfolio">
			<Container>
				<Flex direction="column" align="center">
					<PortfolioTitle>Portfolio</PortfolioTitle>
					<Slider items={slides} />
				</Flex>
			</Container>
		</Wrapper>
	)
}

export default Portfolio
