import React from "react"
import styled from "styled-components"
import { aboutCards } from "../../utils/data"
import Card from "./Card/Card"

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: max(2vw, 16px);
	justify-content: center;
	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		flex-direction: column;
	}
`
const CardList = () => {
	return (
		<Wrapper className="aos-list">
			{aboutCards.map(({ img, text, info }, index) => (
				<Card index={index} key={img} img={img} info={info} text={text} />
			))}
		</Wrapper>
	)
}

export default CardList
