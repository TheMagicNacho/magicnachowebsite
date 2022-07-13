/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { tw } from '@twind';
import { walkSync } from 'https://deno.land/std@0.146.0/fs/mod.ts';
import NavBar from './NavBar.tsx';
import { css } from 'twind/css';
import { globalStyles } from '../style/globalStyle.ts';
import Randomizer from '../utils/Randomizer.ts';

interface LogoProps {
	title: string;
}

const logoStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
	height: '20vh',
};

// const logoA = css`
// @import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

// display: flex;
// justify-content: center;

// font-family: 'Montserrat', sans-serif;
// font-size: 8vw;
// letter-spacing:0.1em;
// -webkit-text-fill-color: transparent;
// -webkit-text-stroke-width: 0.4vw;
// -webkit-text-stroke-color: white;
// text-shadow: 
// 			0.6vw 0.6vw #ff1f8f,
// 			1.3vw 1.3vw #000000;

// `

// const logoB = css`
// font-size: 8vw;

// display: flex;
// justify-content: center;

// padding: 4%;
// color: #fcedd8;
// font-family: 'Niconne', cursive;
// font-weight: 700;
// text-shadow: 0.5vw 0.5vw 0px #eb452b, 
// 		  1vw 1vw 0vw #efa032, 
// 		  1.5vw 1.5vw 0vw #46b59b, 
// 		  2.0vw 2.0vw 0vw #017e7f, 
// 		  2.5vw 2.5vw 0vw #052939, 
// 		  3.0vw 3.0vw 0vw #c11a2b, 
// 		  3.5vw 3.5vw 0vw #c11a2b, 
// 		  4.0vw 4.0vw 0vw #c11a2b, 
// 		  4.5vw 4.5vw 0vw #c11a2b;
// `


export default function Header(props: LogoProps): h.JSX.Element {
	const titleStyle = Randomizer.logo();

	return (
		<div class={tw(globalStyles)}>
			<header >
				<div class={'title'}>
					{/* <h1 style={{ justifyContent: 'center' }}> */}
					<h1 class={tw(titleStyle)} >
						{props.title}
					</h1>
				</div>

				<div class={tw`py-3`}>
					<img
						style={logoStyle}
						src={`/gif/${Math.floor(Math.random() * 6)}.gif`}
						alt="A cool gif. They're all the rage."
					/>
				</div>

				<div class={'navStyle'}>
					<hr></hr>
					<NavBar />
					<hr></hr>
				</div>
			</header>
		</div>
	);
}
