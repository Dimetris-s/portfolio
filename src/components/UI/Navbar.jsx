import React, { useState } from "react"
import styled from "styled-components"
import { Container, MenuLink } from "../styled"
import { menuLinks } from "../../utils/data"
import { scrollTo } from "../../utils/scrollTo"
import { navbarBorderKeyframes } from "../styled/keyframes"
import BurgerMenu, { Burger } from "./BurgerMenu"

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.navbar["bg-color"]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${({ theme }) => theme.navbar.height};
	position: fixed;
	z-index: 2;
	animation: ${navbarBorderKeyframes} 5s ease-in-out infinite forwards alternate-reverse;
`

const List = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		display: none;
	}
`

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenuOpen = () => {
		setOpenMenu(prev => !prev)
	}
	return (
		<Wrapper data-aos="fade-down" data-aos-duration="1000">
			<BurgerMenu onClick={toggleMenuOpen} isOpen={openMenu} />
			<Burger isOpen={openMenu} onClick={toggleMenuOpen} />
			<Container>
				<List>
					{menuLinks.map(({ path, text }) => (
						<li key={path}>
							<MenuLink
								onClick={event => scrollTo(event, { elementId: path })}
								href={path}>
								{text}
							</MenuLink>
						</li>
					))}
				</List>
			</Container>
		</Wrapper>
	)
}

export default Navbar
