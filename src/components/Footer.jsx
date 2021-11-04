import React from "react"
import styled from "styled-components"
import { menuLinks } from "../utils/data"
import cv from "../assets/cv.pdf"

const Wrapper = styled.footer`
	padding: 50px 0;
	background-color: ${({ theme }) => theme.palette.grey};
	display: flex;
	align-items: end;
	justify-content: center;
	column-gap: 5rem;
`

const Left = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 20px;
`
const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 20px;
`
const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

const MenuLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
	padding: 0.3rem 0.1rem;
	position: relative;
	&:focus::after {
		width: 100%;
		outline: none;
	}
	&:hover::after {
		transition: width 0.3s ease;
		width: 100%;
	}
	&::after {
		content: "";
		position: absolute;
		height: 1px;
		width: 0;
		background-color: ${({ theme }) => theme.palette.yellow};
		bottom: 0;
		left: 0;
		transition: width 0.3s ease;
	}
`

const InfoText = styled.p`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
`

const ContactLink = styled(MenuLink)`
	padding: 0;
`

const Footer = () => {
	return (
		<Wrapper id="contact">
			<Left>
				{menuLinks.map(({ path, text }) => (
					<li key={path}>
						<MenuLink href={path}>{text}</MenuLink>
					</li>
				))}
			</Left>
			<Center>
				<InfoText>Contact:</InfoText>
				<ContactLink href="mailto:dim3triss@gmail.com">Email: dim3triss@gmail.com</ContactLink>
				<ContactLink href="https://github.com/Dimetris-s">GitHub: github.com/Dimetris-s</ContactLink>
				<ContactLink href="tel:+380502875408">Calls: +38 (050) 297-54-08</ContactLink>
			</Center>
			<Right>
				<MenuLink href={cv} download>
					Download my CV
				</MenuLink>
			</Right>
		</Wrapper>
	)
}

export default Footer
