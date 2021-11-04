import React, { useEffect, useState } from "react"
import styled from "styled-components"
import arrowUp from "../../assets/slider/arrow-up.svg"
import { scrollTo } from "../../utils/scrollTo"
import { CSSTransition } from "react-transition-group"
import "./ScrollUp.css"
const Button = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.palette.yellow};
	cursor: pointer;
	position: fixed;
	right: 5%;
	bottom: 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0 0 5px 1px ${({ theme }) => theme.palette.yellow};
	}
	&::after {
		content: "";
		background: url(${arrowUp}) center no-repeat;
		background-size: contain;
		width: 40%;
		height: 40%;
	}
`

const ScrollUp = props => {
	const [show, setShow] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", checkScroll)

		return () => {
			window.removeEventListener("scroll", checkScroll)
		}
	}, [])
	const checkScroll = event => {
		const scroll = event.target.scrollingElement.scrollTop
		if (scroll >= 700) {
			setShow(true)
		} else {
			setShow(false)
		}
	}
	const clickHandler = () => {
		scrollTo(null, { position: 0 })
	}

	return (
		<CSSTransition unmountOnExit in={show} timeout={300} classNames={"scroll"}>
			<Button onClick={clickHandler} />
		</CSSTransition>
	)
}

export default ScrollUp
