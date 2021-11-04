import React, { useState } from "react"
import styled from "styled-components"
import leftArrow from "../assets/slider/arrow-left.svg"
import rightArrow from "../assets/slider/arrow-right.svg"
import linkArrow from "../assets/slider/arrow-right-gold.svg"
import { slides } from "../utils/data"

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`
const SliderWrapper = styled.div`
	width: min(970px, 70vw);
	max-height: 450px;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.palette.grey};
	overflow: hidden;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		max-height: none;
	}
`

const SlidesContainer = styled.div`
	width: 100%;
	max-height: 100%;
	display: flex;
	align-items: center;
	transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
	transition: all 0.4s ease-in;
	position: relative;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		align-items: flex-start;
	}
`
const Slide = styled.div`
	max-height: 450px;
	padding: min(50px, 4vw);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: min(50px, 10%);
	flex-shrink: 0;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		flex-direction: column;
		justify-content: flex-start;
		max-height: none;
	}
`
const Image = styled.div`
	border-radius: 30px;
	overflow: hidden;
	flex: 1.7;
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		margin-bottom: 10px;
	}
	& img {
		max-width: 100%;
		object-fit: cover;
	}
`

const SlideContent = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	row-gap: 25px;
	color: ${({ theme }) => theme.palette.white};
	height: 344px;
`
const SlideTitle = styled.h4`
	font-size: 24px;
	font-weight: 300;
`
const SlideText = styled.p`
	text-align: center;
	max-height: 300px;
	overflow-y: auto;
	flex-grow: 1;
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
	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		max-height: 100px;
	}
`
const SlideLink = styled.a`
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
	&:hover {
		opacity: 1;
	}
`
const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0)
	const clickHandler = direction => {
		if (direction === "left") {
			if (slideIndex === 0) {
				setSlideIndex(slides.length - 1)
				return
			} else {
				setSlideIndex(prev => prev - 1)
			}
		} else {
			if (slideIndex === slides.length - 1) {
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
					{slides.map(slide => (
						<Slide key={slide.id}>
							<Image>
								<img src={slide.img} alt="slide" />
							</Image>
							<SlideContent>
								<SlideTitle>{slide.title}</SlideTitle>
								<SlideText>{slide.text}</SlideText>
								<SlideLink href={slide.link}>Discover</SlideLink>
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
