import React from "react"
import styled from "styled-components"
import Container from "./styled/Container"
import { menuLinks } from "../utils/data"

const Wrapper = styled.div`
	/* background-color: ${({ theme }) => theme.navbar["bg-color"]}; */
	background-image: ${({ theme }) => theme.navbar["bg-img"]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${({ theme }) => theme.navbar.height};
	position: fixed;
	z-index: 2;
	box-shadow: 0px -1px 17px 0 ${({ theme }) => theme.palette.yellow};
`

const List = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const MenuLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.white};
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

const Navbar = () => {
	return (
		<Wrapper>
			<Container>
				<List>
					{menuLinks.map(({ path, text }) => (
						<li key={path}>
							<MenuLink href={path}>{text}</MenuLink>
						</li>
					))}
				</List>
			</Container>
		</Wrapper>
	)
}

export default Navbar
