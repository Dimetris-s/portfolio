import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "../UI/Navbar"
import avatar from "../../assets/bigphoto.png"
import Modal from "../common/Modal"
import { MenuLink, Flex, Title } from "../styled"
import cv from "../../assets/cv.pdf"

const Wrapper = styled.header`
	background-color: ${({ theme }) => theme.palette.black};
	width: 100%;
	height: 100vh;
`
const HeaderHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	padding-top: ${({ theme }) => theme.navbar.height};
	padding-left: 40px;
	padding-right: 10px;
	height: 100%;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		flex-direction: column;
		justify-content: flex-start;
		padding-left: 10px;
		padding-top: calc(${({ theme }) => theme.navbar.height} + 40px);
	}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: #e4e4e4;
`
const Right = styled.div`
	flex: 1.7;
	height: 100%;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		flex: 1;
		overflow: hidden;
	}
`

const Name = styled.h1`
	font-family: "NEXT ART";
	font-size: 4.5rem;
	font-weight: 700;
	line-height: 5rem;
	margin-bottom: 25px;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: 2rem;
		line-height: 2rem;
	}
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
const Image = styled.div`
	height: 100%;
	& img {
		height: 100%;
		width: 100%;
		object-fit: contain;
		object-position: bottom;
	}
`

const Hello = styled(Title)`
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: 4.5rem;
		line-height: 4.5rem;
		margin-bottom: 1rem;
	}
`

const CVLink = styled(MenuLink)`
	color: ${({ theme }) => theme.palette.yellow};
	&::after {
		background-color: ${({ theme }) => theme.palette.blue};
	}
`

const Header = () => {
	const [modalActive, setModalActive] = useState(false)
	const closeModal = () => setModalActive(false)
	return (
		<Wrapper>
			<Navbar />
			<HeaderHero>
				<Left>
					<Hello data-aos="fade-right" data-aos-delay="400">
						Hello
					</Hello>
					<Name data-aos="fade-right" data-aos-delay="600">
						I’m Dmytro Mudruk
					</Name>
					<About data-aos="fade-right" data-aos-delay="800">
						I've been doing front-end development for a 1.5 years now. Currently open
						for suggestions. Check my portfolio and I will be glad to get in touch with
						you.
					</About>
					<Button
						onClick={() => setModalActive(true)}
						data-aos="fade-right"
						data-aos-delay="1000">
						Contact me
					</Button>
				</Left>
				<Right>
					<Image data-aos="fade-in" data-aos-delay="1200" data-aos-duration="1200">
						<img src={avatar} alt="avatar" />
					</Image>
				</Right>
			</HeaderHero>
			<Modal title="Contacts" active={modalActive} onClose={closeModal}>
				<Flex direction="column" rowGap="0.35rem" align="flex-start">
					<MenuLink href="mailto:dim3triss@gmail.com">
						Email: dim3triss@gmail.com
					</MenuLink>
					<MenuLink href="tel:+380502875408">Calls: +38 (050) 297-54-08</MenuLink>
					<CVLink href={cv} download>
						Download my CV
					</CVLink>
				</Flex>
			</Modal>
		</Wrapper>
	)
}

export default Header
