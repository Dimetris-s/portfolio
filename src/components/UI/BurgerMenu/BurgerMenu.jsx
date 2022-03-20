import React from "react"
import styled from "styled-components"
import { menuLinks } from "../../../utils/data"
import { scrollTo } from "../../../utils/scrollTo"

const Wrapper = styled.div`
	height: 100vh;
	z-index: 2;
	overflow-y: auto;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
	background-color: ${({ theme }) => theme.palette.black};
	transition: transform 0.5s ease-in-out;
	display: flex;
	justify-content: center;
`
const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 6rem;
	row-gap: 1rem;
`
const MenuLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.white};
	padding: 0.3rem 0.1rem;
	position: relative;
	font-size: 2rem;
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

const ListItem = styled.li`
	width: 100%;
	text-align: center;
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 6px;
`

const BurgerMenu = ({ isOpen, onClick }) => {
	const clickHandler = (event, path) => {
		onClick()
		scrollTo(event, { elementId: path })
	}
	return (
		<Wrapper isOpen={isOpen}>
			<List>
				{menuLinks.map(({ path, text }) => (
					<ListItem key={path}>
						<MenuLink onClick={event => clickHandler(event, path)} href={path}>
							{text}
						</MenuLink>
					</ListItem>
				))}
			</List>
		</Wrapper>
	)
}

export default BurgerMenu
