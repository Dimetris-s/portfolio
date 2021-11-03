import React from "react"
import styled from "styled-components"
import Slider from "./Slider"
import Container from "./styled/Container"
import Flex from "./styled/Flex"

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.black};
	padding-top: 100px;
	padding-bottom: 150px;
`
const Title = styled.h2`
	font-family: "NEXT ART";
	font-size: ${({ theme }) => theme.text.titleSize}px;
	color: #fff;
	font-weight: 400;
	text-align: center;
	margin-bottom: 50px;
`
const Portfolio = () => {
	return (
		<Wrapper id="portfolio">
			<Container>
				<Flex direction="column" align="center">
					<Title>Portfolio</Title>
					<Slider />
				</Flex>
			</Container>
		</Wrapper>
	)
}

export default Portfolio
