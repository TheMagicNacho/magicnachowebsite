import { apply, css, theme } from 'twind/css';
import Randomizer from '../utils/Randomizer.ts';

const sectionBackground = Randomizer.sectionColor();

export const globalStyles = css({
	':global': {
		body: {
			// backgroundColor: 'white',
			backgroundImage: 'url(/background/bluecard.jpg)',
			display: 'flex',
			flexDirection: 'column',
			padding: '2%',
		},

		a: {
			color: 'Blue',

			'&:visited': {
				color: 'purple',
			},
			'&:hover': {
				color: 'cyan',
			},
		},

		h1: {
			fontSize: '2.5em',
			fontWeight: 'bold',
		},

		h2: {
			fontSize: '1.87em',
		},

		h3: {
			fontSize: '1.87em',
		},

		nav: {
			textAlign: 'center',
			width: '100%',
			backgroundColor: sectionBackground,
		},

		footer: {
			display: 'flex',
			backgroundColor: sectionBackground,
			borderStyle: 'outset',
			borderWidth: 'thick',
			flexWrap: 'wrap',
			width: '100%',
		},

		header: {
			top: '0px',
			width: '100%',
		},

		'.content': {
			// display: 'flex',
			borderStyle: 'outset',
			borderWidth: 'thick',
			padding: '2vw',
			backgroundColor: sectionBackground,
			margin: '1% 0 1% 0',
		},
	},

	// // HEADDER THINGS
	// '.title': {

	// 	padding: '1vh',
	// 	textAlign: 'center',
	// 	display: 'flex',

	// 	fontFamily: 'Monserrat',

	// },

	'.navStyle': {
		borderStyle: 'outset',
		borderWidth: 'thick',
	},

	'.quipper': {},

	'.quip': {
		width: '100%',
		display: 'flex',
		padding: '1%',
		gap: '5vw',
	},

	'.quip #date': {
		color: 'gray',
		fontSize: '1em',
		textAlign: 'right',
	},
	'.quip #content': {
		color: 'inherit',
		fontSize: '1.5em',
		textAlign: 'left',
	},
});
