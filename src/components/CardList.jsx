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
		<Wrapper className="aos-list">
			{aboutCards.map(({ img, text }, index) => (
				<Card index={index} key={img} img={img} text={text} />
			))}
		</Wrapper>
	)
}

export default CardList
