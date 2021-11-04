import React from "react"
import styled from "styled-components"
import s from "./Card.module.css"

const Image = styled.img`
	max-width: 100%;
	object-fit: contain;
`
const Text = styled.p`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
`
const List = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	/* list-style-type: disc; */
`
const ListItem = styled.li`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
`

const Title = styled.h4`
	align-self: center;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.palette.yellow};
	font-size: ${({ theme }) => theme.text.size};
	font-weight: 600;
`

const Card = ({ img, text, index, info }) => {
	return (
		<div
			data-aos="zoom-out"
			data-aos-offset="100"
			data-aos-delay={index * 150}
			data-aos-anchor=".aos-list"
			className={s.card}>
			<div className={s.flipper}>
				<div className={s.front}>
					<Image src={img} />
					<Text>{text}</Text>
				</div>
				<div className={s.back}>
					<Title>I'm working with:</Title>
					<List>
						{info.map(item => (
							<ListItem>{item}</ListItem>
						))}
					</List>
				</div>
			</div>
		</div>
	)
}

export default Card
