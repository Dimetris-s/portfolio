export function scrollTo(event, params) {
	if (event) event.preventDefault()
	const { position, elementId, scrollType } = params
	if (typeof position === "number") {
		window.scrollTo({
			top: position,
			behavior: scrollType || "smooth",
		})
		return
	}
	const id = elementId.slice(1)
	if (!id) {
		window.scrollTo({ top: 0, behavior: scrollType || "smooth" })
		return
	}
	const elementPosition = document.getElementById(id).offsetTop
	window.scrollTo({ top: elementPosition, behavior: scrollType || "smooth" })
}
