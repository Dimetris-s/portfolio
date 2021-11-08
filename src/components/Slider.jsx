import React, { useState } from "react"
import styled from "styled-components"
import leftArrow from "../assets/slider/arrow-left.svg"
import rightArrow from "../assets/slider/arrow-right.svg"
import linkArrow from "../assets/slider/arrow-right-gold.svg"

const Wrapper = styled.div`
	position: relative;
	width: min(1000px, 80vw);
	height: 500px;
`
const SliderWrapper = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.palette.grey};
	overflow: hidden;
`

const SlidesContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
	transition: transform 0.6s ease-in;
`
const Slide = styled.div`
	flex-shrink: 0;
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
	width: 100%;
	gap: min(50px, 10%);
	padding: min(35px, 5vw);
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		flex-direction: column;
	}
`
const Image = styled.div`
	border-radius: 30px;
	overflow: hidden;
	height: 100%;
	width: 100%;
	flex: 1.5;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`

const SlideContent = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	color: ${({ theme }) => theme.palette.white};
`
const SlideTitle = styled.h4`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: min(20px, 5%);
`
const SlideText = styled.p`
	max-height: 300px;
	overflow-y: auto;
	flex-grow: 1;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		max-height: 100px;
	}
	&::-webkit-scrollbar {
		width: 5px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #707070;
		transition: background-color 0.2s ease;
		border-radius: 20px;
		cursor: pointer;
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: #666666;
	}
`
const SlideLink = styled.a`
	margin-top: min(10px, 3%);
	text-decoration: none;
	color: ${({ theme }) => theme.palette.yellow};
	display: flex;
	align-items: center;
	&::after {
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		background: url(${linkArrow}) no-repeat center;
		background-size: contain;
		margin-left: 5px;
	}
	&:hover {
		text-decoration: underline;
	}
`
const Arrow = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.palette.yellow};
	border-radius: 50%;
	width: clamp(45px, 5vw, 60px);
	height: clamp(45px, 5vw, 60px);
	top: 50%;
	left: ${({ direction }) => direction === "left" && "-70px"};
	right: ${({ direction }) => direction === "right" && "-70px"};
	transform: translateY(-50%);
	background-image: url(${({ direction }) => (direction === "right" ? rightArrow : leftArrow)});
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
	opacity: 0.8;
	transition: all 0.3s ease-in;
	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		top: 60%;
		left: ${({ direction }) => direction === "left" && "10px"};
		right: ${({ direction }) => direction === "right" && "10px"};
	}
	&:hover {
		opacity: 1;
	}
`
const Slider = ({ items }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const clickHandler = direction => {
		if (direction === "left") {
			if (slideIndex === 0) {
				setSlideIndex(items.length - 1)
				return
			} else {
				setSlideIndex(prev => prev - 1)
			}
		} else {
			if (slideIndex === items.length - 1) {
				setSlideIndex(0)
				return
			} else {
				setSlideIndex(prev => prev + 1)
			}
		}
	}
	return (
		<Wrapper>
			<SliderWrapper>
				<SlidesContainer activeSlide={slideIndex}>
					{items.map(item => (
						<Slide key={item.id}>
							<Image>
								<img src={item.img} alt="slide" />
							</Image>
							<SlideContent>
								<SlideTitle>{item.title}</SlideTitle>
								<SlideText>{item.text}</SlideText>
								<SlideLink href={item.link}>Discover</SlideLink>
							</SlideContent>
						</Slide>
					))}
				</SlidesContainer>
			</SliderWrapper>
			<Arrow onClick={() => clickHandler("left")} direction="left" />
			<Arrow onClick={() => clickHandler("right")} direction="right" />
		</Wrapper>
	)
}

export default Slider
