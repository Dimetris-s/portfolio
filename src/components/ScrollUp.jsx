import React, { useEffect, useState } from "react"
import styled from "styled-components"
import arrowUp from "../assets/slider/arrow-up.svg"
import { scrollTo } from "../utils/scrollTo"

const Wrapper = styled.div`
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
	opacity: 0.7;
	transition: all 0.3s ease;
	&:hover {
		opacity: 1;
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
	const [show, setShow] = useState(true)
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

	if (!show) return null

	return <Wrapper onClick={clickHandler} {...props} />
}

export default ScrollUp
