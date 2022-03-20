import styled from "styled-components"

const Flex = styled.div`
	display: flex;
	align-items: ${({ align }) => align || "stretch"};
	justify-content: ${({ justify }) => justify || "flex-start"};
	flex-direction: ${({ direction }) => direction || "row"};
	flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
	row-gap: ${({ rowGap }) => rowGap};
	row-gap: ${({ columnGap }) => columnGap};
`

export default Flex
