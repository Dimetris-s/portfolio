import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
	font-family: "NEXT ART";
	font-weight: 600;
	line-height: 3.5rem;
	color: ${props => props.color || props.theme.palette.white};
	font-size: ${props => props.font || props.theme.text.titleSize + "px"};
	text-align: ${props => props.align};
	@media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		line-height: 1.5rem;
		font-size: min(3rem, 10vw);
	}
`

const Title = props => {
	return <StyledTitle {...props} />
}

export default Title
