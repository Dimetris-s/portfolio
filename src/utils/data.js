import htmlImg from "../assets/cardIcons/html.svg"
import cssImg from "../assets/cardIcons/css.svg"
import sassImg from "../assets/cardIcons/sass.svg"
import jsImg from "../assets/cardIcons/js.svg"
import reactImg from "../assets/cardIcons/react.svg"
import reduxImg from "../assets/cardIcons/redux.svg"
import nodejsImg from "../assets/cardIcons/nodejs.svg"
import _1 from "../assets/slider/1.jpg"
import _2 from "../assets/slider/2.jpg"
import _3 from "../assets/slider/3.jpg"

export const menuLinks = [
	{ path: "#", text: "Home" },
	{ path: "#technologies", text: "Technologies" },
	{ path: "#about", text: "About Me" },
	{ path: "#portfolio", text: "Portfolio" },
	{ path: "#contact", text: "Contact" },
]

export const aboutCards = [
	{
		img: htmlImg,
		text: "HTML 5",
	},
	{
		img: cssImg,
		text: "CSS 3",
	},
	{
		img: sassImg,
		text: "Sass/Scss",
	},
	{
		img: jsImg,
		text: "JavaScript/ES6+",
	},
	{
		img: reactImg,
		text: "ReactJS",
	},
	{
		img: reduxImg,
		text: "Redux",
	},
	{
		img: nodejsImg,
		text: "NodeJS",
	},
]

export const slides = [
	{
		id: 1,
		img: _1,
		title: "Слайд 1",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla maiores magni ut veniam
		non sun, quod aliquid nam, recusandae, libero suscipit nemo laudantium iusto inventore
		voluptatem iste atque ipsam quia nihil debitis? Explicabo error velit sunt nesciunt`,
		link: "#",
	},
	{
		id: 2,
		img: _2,
		title: "Слайд 2",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla maiores magni ut veniam
		non sunt, quod aliquid nam, recusandae, libero suscipit nemo laudantium iusto inventore
		voluptatem iste atque ipsam quia nihil debitis? Explicabo error velit sunt nesciunt
		dignissimos? Ex omnis cupiditate facere eum dolorem aspernatur minima nihil sapiente
		molestiae quo, iusto quis voluptatibus? Assumenda quam deserunt et natus eius recusandae,
		corporis ipsa esse iste! Labore molestiae excepturi ipsam assumenda.menda quam deserunt et
		natus eius recusandae, corporis ipsa esse iste! Labore molestiae excepturi ipsam
		assumenda.menda quam deserunt et natus eius recusandae, corporis ipsa esse iste! Labore
		molestiae excepturi ipsam assumenda.acere eum dolorem aspernatur minima nihil sapiente
		molestiae quo, iusto quis voluptatibus? Assumenda quam deserunt et natus eius recusandae,
		corporis ipsa esse iste! Labore molestiae excepturi ipsam assumenda.menda quam deserunt et
		natus eius recusandae, corporis ipsa esse iste! Labore molestiae excepturi ipsam
		assumenda.menda quam deserunt et natus eius recusandae, corporis ipsa esse iste! Labore`,
		link: "#",
	},
	{
		id: 3,
		img: _3,
		title: "Слайд 3",
		text: "Lorem ipsum dolor sit amet consectetur",
		link: "#",
	},
]
