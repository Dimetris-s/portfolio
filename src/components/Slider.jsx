import React, { useState } from "react"
import styled from "styled-components"
import leftArrow from "../assets/slider/arrow-left.svg"
import rightArrow from "../assets/slider/arrow-right.svg"
import linkArrow from "../assets/slider/arrow-right-gold.svg"
import { slides } from "../utils/data"

const Wrapper = styled.div`
	width: min(970px, 70vw);
	padding: min(50px, 7vw);
	position: relative;
	border-radius: 30px;
	background-color: ${({ theme }) => theme.palette.grey};
	/* overflow: hidden; */
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
const SlidesContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	transform: translateX(-${({ activeSlide }) => activeSlide * 100}%);
	transition: all 0.6s ease-in;
`
const Slide = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: min(50px, 10%);
	flex-shrink: 0;
	height: min-content;
`
const Image = styled.div`
	border-radius: 30px;
	overflow: hidden;
	flex: 1.7;

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
`
const SlideTitle = styled.h4`
	font-size: 24px;
	font-weight: 300;
`
const SlideText = styled.p`
	text-align: center;
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
		<Wrapper onClick={() => clickHandler("left")}>
			<SlidesContainer activeSlide={slideIndex}>
				{slides.map(slide => (
					<Slide key={slide.id}>
						<Image>
							<img src={slide.img} />
						</Image>
						<SlideContent>
							<SlideTitle>{slide.title}</SlideTitle>
							<SlideText>{slide.text}</SlideText>
							<SlideLink href={slide.link}>Discover</SlideLink>
						</SlideContent>
					</Slide>
				))}
			</SlidesContainer>
			<Arrow onClick={() => clickHandler("left")} direction="left" />
			<Arrow onClick={() => clickHandler("right")} direction="right" />
		</Wrapper>
	)
}

export default Slider
