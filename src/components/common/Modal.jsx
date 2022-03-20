import React, { useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	pointer-events: ${({ active }) => (active ? "all" : "none")};
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: all 0.2s ease-in;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`

const Content = styled.div`
	background-color: ${({ theme }) => theme.palette.black};
	border-radius: 20px;
	padding: 1rem 1.5rem;
	box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.palette.yellow};
	transform: translateY(${({ active }) => (active ? "0" : "-100px")});
	opacity: ${({ active }) => (active ? "1" : "0.4")};
	transition: all 0.3s ease-in;
	color: ${({ theme }) => theme.palette.white};
	min-width: min(70vw, 800px);
`

const ModalTitle = styled.h2`
	font-family: "NEXT ART";
	color: ${({ theme }) => theme.palette.yellow};
	text-shadow: 1px 1px 6px ${({ theme }) => theme.palette.yellow};
	font-size: 2em;
	font-weight: 600;
	text-align: center;
	margin-bottom: 1em;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		font-size: 1.5em;
	}
`
const Modal = ({ active, onClose, title, children }) => {
	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "initial"
		}
	}, [active])

	return (
		<Wrapper active={active} onClick={onClose}>
			<Content active={active} onClick={e => e.stopPropagation()}>
				<ModalTitle>{title}</ModalTitle>
				{children}
			</Content>
		</Wrapper>
	)
}

export default Modal
