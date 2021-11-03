import React from "react"
import styled from "styled-components"
import { aboutCards } from "../utils/data"
import Card from "./Card"

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: max(2vw, 16px);
	justify-content: center;
`
const CardList = () => {
	return (
		<Wrapper>
			{aboutCards.map(({ img, text }) => (
				<Card key={img} img={img} text={text} />
			))}
		</Wrapper>
	)
}

export default CardList
