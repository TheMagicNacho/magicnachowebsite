
import { apply, css, theme } from 'twind/css';
import Randomizer from '../utils/Randomizer.ts'

const sectionBackground = Randomizer.sectionColor();

export const globalStyles = css({
	':global': {
		body: {
			backgroundColor: 'white',
			display: 'flex',
			flexDirection: 'column',
            padding: '2%',
		},

		a: {
			color: theme('colors.blue.500'),
			'&:hover': apply`text-blue-700`,
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
			borderStyle: 'outset',
			borderWidth: 'thick',
            padding: '2vw',
            height: 'fitContent',
            background: sectionBackground,
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


});
