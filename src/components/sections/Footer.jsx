import React from "react"
import styled from "styled-components"
import cv from "../../assets/cv.pdf"
import { MenuLink } from "../styled"

const Wrapper = styled.footer`
	padding: 50px 10px;
	background-color: ${({ theme }) => theme.palette.grey};
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: min(5rem, 8vw);
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		flex-direction: column;
	}
`

const Left = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 20px;
`

const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-self: end;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		align-self: start;
	}
`

const InfoText = styled.p`
	color: ${({ theme }) => theme.palette.yellow};
	font-size: ${({ theme }) => theme.text.size};
	font-weight: 600;
`

const ContactLink = styled(MenuLink)`
	padding: 0;
`
const CVLink = styled(MenuLink)`
	color: ${({ theme }) => theme.palette.yellow};
	&::after {
		background-color: ${({ theme }) => theme.palette.blue};
	}
`
const Footer = () => {
	return (
		<Wrapper id="contact">
			<Left>
				<InfoText>Contact:</InfoText>
				<ContactLink href="mailto:dim3triss@gmail.com">
					Email: dim3triss@gmail.com
				</ContactLink>
				<ContactLink href="https://github.com/Dimetris-s">
					GitHub: github.com/Dimetris-s
				</ContactLink>
				<ContactLink href="tel:+380502875408">Calls: +38 (050) 297-54-08</ContactLink>
			</Left>
			<Right>
				<CVLink href={cv} download>
					Download my CV
				</CVLink>
			</Right>
		</Wrapper>
	)
}

export default Footer
