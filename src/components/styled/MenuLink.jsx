import styled from "styled-components"

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

export default MenuLink
