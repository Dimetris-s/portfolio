import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h2`
	font-family: "NEXT ART";
	font-weight: 600;
	line-height: 4rem;
	color: ${props => props.color || props.theme.palette.white};
	font-size: ${props => props.font || props.theme.text.titleSize + "px"};
`

const Title = props => {
	return <StyledTitle {...props} />
}

export default Title
