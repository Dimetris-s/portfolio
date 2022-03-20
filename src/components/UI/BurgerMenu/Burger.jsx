import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	position: fixed;
	display: none;
	z-index: 10;
	top: 50%;
	left: 50%;
	width: ${({ theme }) => theme.burger.size}px;
	height: ${({ theme }) => theme.burger.size}px;
	transform: translate(-50%, -50%);
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		display: block;
	}

	&::after,
	&::before {
		content: "";
		width: ${({ theme }) => theme.burger.size}px;
		height: 3px;
		background-color: ${({ theme }) => theme.palette.white};
		border-radius: 10px;
		position: absolute;
		transition: all 0.3s ease;
	}
	&::after {
		top: 0;
		${({ isOpen }) => isOpen && `top: 50%; transform: translateY(-50%) rotate(-45deg)`}
	}

	&::before {
		bottom: 0;
		${({ isOpen }) => isOpen && `top: 50%; transform: translateY(-50%) rotate(45deg)`}
	}
`
const Middle = styled.span`
	position: absolute;
	width: ${({ theme }) => theme.burger.size}px;
	background-color: ${({ theme }) => theme.palette.white};
	border-radius: 10px;
	height: 3px;
	top: 50%;
	transform: translateY(-50%) scale(${({ isOpen }) => (isOpen ? "0" : "1")});
	transition: all 0.3s ease;
`
const Burger = ({ isOpen, onClick }) => {
	return (
		<Wrapper onClick={onClick} isOpen={isOpen}>
			<Middle isOpen={isOpen} />
		</Wrapper>
	)
}

export default Burger
