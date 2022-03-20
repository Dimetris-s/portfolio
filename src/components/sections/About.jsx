import React from "react"
import styled from "styled-components"
import CardList from "../UI/CardList"
import { Title as SkillsTitle, Container } from "../styled"
import bg_img from "../../assets/about/about_bg.png"
import { aboutImages } from "../../utils/images"

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.grey};
	padding: min(65px, 10vw) 0 min(115px, 10vw);
`
const Skills = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	row-gap: min(5rem, 10vw);
`
const Info = styled.div`
	padding-top: min(200px, 10vw);
	padding-bottom: min(60px, 7vw);
	display: flex;
	justify-content: center;
	background: url(${bg_img}) no-repeat;
	background-size: contain;
`
const InfoContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 14px;
	background-color: ${({ theme }) => theme.palette.black};
	box-shadow: 2px 2px 10px 0 #000;
	padding: min(60px, 6vw);
	width: min(480px, 40vw);
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		width: 100%;
	}
`
const Title = styled.h2`
	font-family: "NEXT ART";
	color: ${({ theme }) => theme.palette.yellow};
	text-shadow: 1px 1px 6px ${({ theme }) => theme.palette.yellow};
	font-size: ${({ theme }) => theme.text.titleSize}px;
	font-weight: 400;
	position: absolute;
	top: -${({ theme }) => theme.text.titleSize * 0.75}px;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		position: static;
		margin-bottom: 2rem;
	}
`
const Text = styled.p`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
	line-height: 23px;
`
const Image = styled.div`
	border-radius: 14px;
	background-color: ${({ theme }) => theme.palette.black};
	padding: 20px;
	position: absolute;
	width: 50%;
	left: ${({ position }) => position?.left + "%" || "initial"};
	top: ${({ position }) => position?.top + "%" || "initial"};
	bottom: ${({ position }) => position?.bottom + "%" || "initial"};
	right: ${({ position }) => position?.right + "%" || "initial"};
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		width: 65%;
		left: ${({ position }) => -15 + position?.left + "%" || "initial"};
		top: ${({ position }) => 10 + position?.top + "%" || "initial"};
		bottom: ${({ position }) => 10 + position?.bottom + "%" || "initial"};
		right: ${({ position }) => -15 + position?.right + "%" || "initial"};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		display: none;
	}
	& img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
		border: 3px solid #ffdea2;
	}
`
const About = () => {
	return (
		<Wrapper id="technologies">
			<Container>
				<Skills>
					<SkillsTitle>Technologies</SkillsTitle>
					<CardList />
				</Skills>
				<Info id="about">
					<InfoContent>
						<Image position={{ top: -13, left: -50 }}>
							<img src={aboutImages[0]} alt="Dima" />
						</Image>
						<Image position={{ left: -50, bottom: -15 }}>
							<img src={aboutImages[1]} alt="Dima" />
						</Image>
						<Image position={{ right: -50, top: -11 }}>
							<img src={aboutImages[2]} alt="Dima" />
						</Image>
						<Image position={{ right: -50, bottom: -17 }}>
							<img src={aboutImages[3]} alt="Dima" />
						</Image>
						<Title>About me</Title>
						<Text>
							Hello again! As you already know my name is Dmitry. I am 23 years old, I
							was born and live in Odessa (Ukraine). In the past, a professional
							dancer and performer in theatrical performances and shows. About two
							years ago I started to be interested in programming as another of my
							hobbies, and realized pretty quickly that programming could be something
							more in my life, than just a hobby. I discovered that there are endless
							possibilities for creativity in this profession, and for my own
							realization, as well as the ability not to be tied to a certain place
							and travel, not to mention the fact that this is a profession of the
							future that develops over time and makes it possible to be part of
							advanced technologies. I approach my work with responsibility and
							attention to detail. I know how to listen and always strive to find the
							best and the optimal solution to the problem. You can see my portfolio
							below, as well as download my resume, where it is described in more
							detail my skills.
						</Text>
					</InfoContent>
				</Info>
			</Container>
		</Wrapper>
	)
}

export default About
