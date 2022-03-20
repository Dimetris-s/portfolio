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
	/* list-style-type: disc; */
	/* padding-left: 10px; */
	display: flex;
	flex-direction: column;
	row-gap: 0.2rem;
`
const ListItem = styled.li`
	color: ${({ theme }) => theme.palette.white};
	font-size: ${({ theme }) => theme.text.size};
	font-weight: 600;
	border-bottom: 0.1px solid ${({ theme }) => theme.palette.yellow};
	/* background-color: ${({ theme }) => theme.palette.yellow}; */
	/* border-radius: 4px; */
	text-align: center;
`

const Title = styled.h4`
	align-self: center;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.palette.yellow};
	font-size: 24px;
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
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</div>
			</div>
		</div>
	)
}

export default Card
