import React from "react"
import styled from "styled-components"
import Container from "./styled/Container"
import Navbar from "./Navbar"
import Title from "./styled/Title"
import avatar from "../assets/headerphoto.png"

const Wrapper = styled.header`
	background-color: ${({ theme }) => theme.palette.black};
	width: 100%;
`
const HeaderHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	padding-top: ${({ theme }) => theme.navbar.height};
`

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: #e4e4e4;
`
const Right = styled.div`
	flex: 1;
	display: grid;
`

const Name = styled.h1`
	font-family: "NEXT ART";
	font-size: 4.5rem;
	font-weight: 700;
	line-height: 5rem;
	margin-bottom: 25px;
`

const About = styled.p`
	font-size: ${({ theme }) => theme.text.size};
	margin-bottom: 25px;
`

const Button = styled.button`
	background-color: ${({ theme }) => theme.palette.yellow};
	font-family: "NEXT ART";
	color: #000;
	box-shadow: 0px 2px 13px 0px #e29e007a;
	cursor: pointer;
	font-weight: 700;
	border-radius: 6px;
	padding: 14px 40px;
	outline: none;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 2px 16px 3px #e29e007a;
		background-color: #e4ad21;
	}
	&:active {
		background-color: #ca9102;
		transition: none;
		transform: translateY(1px);
	}
`
const Image = styled.img`
	grid-area: 1/2;
	object-fit: cover;
`

const Header = () => {
	return (
		<Wrapper>
			<Navbar />
			<Container>
				<HeaderHero>
					<Left data-aos="fade-right" data-aos-delay="500">
						<Title>Hello</Title>
						<Name>I’m Dmytro Mudruk</Name>
						<About>
							I've been doing web design, front-end and back-end development for a year now. Do you need a
							website design, site layout, or maybe a turnkey website? Then contact me
						</About>
						<Button>Contact me</Button>
					</Left>
					<Right>
						<Image data-aos="fade-left" data-aos-delay="500" src={avatar} />
					</Right>
				</HeaderHero>
			</Container>
		</Wrapper>
	)
}

export default Header
