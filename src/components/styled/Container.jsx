import styled from "styled-components"

const Container = styled.div`
	width: 100%;
	max-width: 1230px;
	margin: 0 auto;
	padding: 0 15px;
	@media (max-width: 1200px) {
		max-width: 992px;
	}
	@media (max-width: 991px) {
		max-width: 768px;
	}
	@media (max-width: 767px) {
		max-width: 576px;
	}
	@media (max-width: 575px) {
		max-width: 540px;
	}
`

export default Container
