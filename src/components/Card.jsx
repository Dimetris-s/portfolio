import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.palette.black};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1rem;
	padding: min(50px, 7vw);
	width: clamp(150px, 25vw, 270px);
	height: clamp(150px, 25vw, 270px);
	border-radius: 30px;
	box-shadow: 0px 4px 6px 0px #000000;
`

const Image = styled.img`
	max-width: 100%;
	object-fit: contain;
`
const Text = styled.p`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
`

const Card = ({ img, text }) => {
	return (
		<Wrapper>
			<Image src={img} />
			<Text>{text}</Text>
		</Wrapper>
	)
}

export default Card
