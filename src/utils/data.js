import { cardImages, sliderImages } from "./images"

export const menuLinks = [
	{ path: "#", text: "Home" },
	{ path: "#technologies", text: "Technologies" },
	{ path: "#about", text: "About Me" },
	{ path: "#portfolio", text: "Portfolio" },
	{ path: "#contact", text: "Contact" },
]

export const aboutCards = [
	{
		img: cardImages.htmlImg,
		text: "HTML 5",
		info: ["Responsive layout", "Adaptive layout", "Semantic layout"],
	},
	{
		img: cardImages.cssImg,
		text: "CSS 3",
		info: ["Bootstrap", "CSS Grid", "CSS flex-box", "CSS media-queries", "CSS animations"],
	},
	{
		img: cardImages.sassImg,
		text: "Sass/Scss",
		info: ["Mixins", "Variables", "Nesting", "Color functions"],
	},
	{
		img: cardImages.jsImg,
		text: "JavaScript/ES6+",
		info: [
			"ES6+ features",
			"Promises",
			"async/await syntax",
			"import/export syntax",
			"OOP basics",
			"jQuery",
		],
	},
	{
		img: cardImages.reactImg,
		text: "ReactJS",
		info: [
			"React components",
			"hooks",
			"redux/redux-thunk",
			"Context",
			"MUI/styled-components",
			"css-modules",
			"Forms and validation",
		],
	},
	{
		img: cardImages.nodejsImg,
		text: "NodeJS",
		info: [
			"Basic of express",
			"Basic of MongoDB/mongoose",
			"REST/API",
			"Firebase",
			"Node Telegram Bot Api",
		],
	},
	{
		img: cardImages.toolsImg,
		text: "Tools/Addtional",
		info: ["Webpack", "Gulp", "Prettier", "ESLint", "Git", "npm/yarn", "Figma"],
	},
]

export const slides = [
	{
		id: 1,
		img: sliderImages.cloudbudget,
		title: "Landing page",
		text: "Simple html/css landing page, with cool scroll animations, responsive, adaptive UI, semantic html layout.",
		link: "http://cb.dmtrs.space/",
	},
	{
		id: 2,
		img: sliderImages.nurtown,
		title: "Multipage landing",
		text: "Adaptive & responsive multipage landing. Using SCSS prepros, some JS libs(such as SwiperJs, fslightbox, libs for form validation),  gulp for bundling.",
		link: "http://nurtown.dmtrs.space/",
	},
	{
		id: 3,
		img: sliderImages.courses,
		title: "Course selling platform",
		text: `Course selling platform contains: landing page with responsive UI, scroll animations, dark theme, and some JS features;`,
		lines: [
			"Login/register form, where you can sign in or create new account;",
			"Admin page, where you can add, remove, or edit courses and some blocks on landing;",
			"User page, where you can see all courses, and information about them.",
			"Using PHP for backend logic, and dynamic pages render, mySQL database and gulp for project bundling.",
		],
		link: "http://l502974v.beget.tech/",
	},
	{
		id: 4,
		img: sliderImages.minesweeper,
		title: "Game minesweeper",
		text: `The simple well-known game, written using OOP, MVC pattern, vanilla JS and HTML5 canvas. 
		In this application implemented all basic functions, and 3 levels of difficult.`,
		link: "http://ms.dmtrs.space/",
	},
	{
		id: 5,
		img: sliderImages.github,
		title: "React searching app",
		text: "",
		link: "http://gh.dmtrs.space/",
		lines: [
			"Simple React app, which allows you to find github repositories, and get some information about them.",
			"Using:",
			"Github API",
			"Axios for async requests",
			" SCSS for styling",
			"Redux for state management",
		],
	},
	{
		id: 6,
		img: sliderImages.chat,
		title: "Online chat",
		text: "",
		link: "https://chat-lime.vercel.app/login",
		lines: [
			"React online realtime multiuser chat, with possibility of Google authorization.",
			"Using:",
			"Firebase for users auth",
			"Firebase firestore for messages",
			"Context API for providing firebase context",
			"React Transition Group library for animation",
		],
	},
	{
		id: 7,
		img: sliderImages.shop,
		title: "Online shop",
		text: "",
		link: "http://l502974v.beget.tech/",
		lines: [
			"MERN stack online-shop.",
			"Using:",
			"Material-UI and Material-icons for UI;",
			"Redux for state-management;",
			"React-router for navigation;",
			"Main features:",
			"Registration - there are some custom and programmable form validations, checking if username already exists in DB;",
			"Login - Checking for login/password match with user in DB;",
			"Admin dashboard - you can add, remove or edit any product or category in your shop;",
			"Product page - you can sort, filter or search by product name shop priducts, add them to cart or check more information, about product;",
			"Cart - you can immediately see total count and price of your product, each user has their shopping cart assigned.",
		],
	},
]
