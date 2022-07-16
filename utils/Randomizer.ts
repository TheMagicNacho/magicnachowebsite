import { css } from 'twind/css';
import Helper from './Helper.ts';

const logoA = css`
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

display: flex;
justify-content: center;
padding: 3%;
font-family: 'Montserrat', sans-serif;
font-size: 8vw;
letter-spacing:0.1em;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 0.4vw;
-webkit-text-stroke-color: white;
text-shadow: 
            0.6vw 0.6vw #ff1f8f,
            1.3vw 1.3vw #000000;

`;

const logoB = css`
font-size: 8vw;
display: flex;
justify-content: center;
padding: 3%;
color: #fcedd8;
font-family: 'Niconne', cursive;
font-weight: 700;
text-shadow: 0.5vw 0.5vw 0px #eb452b, 
          1vw 1vw 0vw #efa032, 
          1.5vw 1.5vw 0vw #46b59b, 
          2.0vw 2.0vw 0vw #017e7f, 
          2.5vw 2.5vw 0vw #052939, 
          3.0vw 3.0vw 0vw #c11a2b, 
          3.5vw 3.5vw 0vw #c11a2b, 
          4.0vw 4.0vw 0vw #c11a2b, 
          4.5vw 4.5vw 0vw #c11a2b;
`;

const logoC = css`
font-size: 8vw;

display: flex;
justify-content: center;

padding: 3%;
color: blue;
`;
const logoD = css`
	text-align: center;
	font-family: 'Oswald', Helvetica, sans-serif;
	font-size: 7vw;
	padding: 3%;
	transform: skewY(-10deg);
	letter-spacing: 4px;
	word-spacing: -8px;
	color: tomato;
	text-shadow: 
	-1px -1px 0 firebrick,
	-2px -2px 0 firebrick,
	-3px -3px 0 firebrick,
	-4px -4px 0 firebrick,
	-5px -5px 0 firebrick,
	-6px -6px 0 firebrick,
	-7px -7px 0 firebrick,
	-8px -8px 0 firebrick,
	-30px 20px 40px dimgrey
`;

export default class Randomizer {
	private static randInt(maxIndex: number): number {
		return Math.floor(Math.random() * (maxIndex));
	}

	public static logo(): any {
		const styleArray = [logoA, logoB, logoC, logoD];

		const selectedIndex = this.randInt(styleArray.length);

		return styleArray[selectedIndex];
	}

	public static sectionColor(): string {
		const colorArray = [
			'orange',
			'pink',
			'lightCoral',
			'coral',
			'peachPuff',
			'khaki',
			'lavender',
			'plum',
			'paleGreen',
			'mediumSpringGreen',
			'mediumAquamarine',
			'lightCyan',
			'blanchedAlmond',
			'azure',
			'mintCream',
			'linen',
		];

		const selectedIndex = this.randInt(colorArray.length);

		return colorArray[selectedIndex];
	}

	public static banner(): string {
		const bannerArray = Helper.getBanner();

		const selectedIndex = this.randInt(bannerArray.length);

		return bannerArray[selectedIndex];
	}
}
