import React from "react"
import styled from "styled-components"
import { Container, Flex, Title } from "../styled"
import Slider from "../common/Slider"
import { slides } from "../../utils/data"

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.black};
	padding-top: min(10vw, 100px);
	padding-bottom: min(10vw, 150px);
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
