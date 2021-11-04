import React from "react"
import styled from "styled-components"
import Container from "./styled/Container"
import CardList from "./CardList"
import bg_img from "../assets/about/about_bg.png"
import about1 from "../assets/about/about1.jpg"
import about2 from "../assets/about/about2.jpg"
import about3 from "../assets/about/about6.png"
import about4 from "../assets/about/about4.jpg"

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.palette.grey};
	padding: 115px 0;
`
const Skills = styled.div``
const Info = styled.div`
	padding-top: 200px;
	padding-bottom: 60px;
	display: flex;
	justify-content: center;
	background: url(${bg_img}) no-repeat;
	background-size: cover;
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
		<Wrapper>
			<Container>
				<Skills>
					<CardList />
				</Skills>
				<Info id="about">
					<InfoContent>
						<Image position={{ top: -13, left: -50 }}>
							<img src={about1} alt="Dima" />
						</Image>
						<Image position={{ left: -50, bottom: -15 }}>
							<img src={about2} alt="Dima" />
						</Image>
						<Image position={{ right: -50, top: -11 }}>
							<img src={about3} alt="Dima" />
						</Image>
						<Image position={{ right: -50, bottom: -17 }}>
							<img src={about4} alt="Dima" />
						</Image>
						<Title>About me</Title>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae vel dolorem veritatis
							nisi pariatur maxime non velit quo, nam cupiditate quos, perferendis exercitationem ducimus
							deserunt tenetur fugit molestias aliquid distinctio. Praesentium repellendus beatae minima
							modi dignissimos ea necessitatibus, inventore doloremque illo ullam accusantium tempora quae
							molestias? Voluptatem at enim suscipit eveniet itaque fuga consequuntur, commodi, nobis,
							laudantium quisquam dignissimos quia perspiciatis ipsa mollitia vero autem! Dignissimos
							dolores optio quod architecto consequuntur autem aut. Atque consequuntur sunt optio
							consectetur nostrum delectus! Ipsum, atque. Voluptates, non aperiam quae sed ipsam nisi
							minima consequatur voluptate unde officia quas? Officia accusamus molestias repellendus!
						</Text>
					</InfoContent>
				</Info>
			</Container>
		</Wrapper>
	)
}

export default About
