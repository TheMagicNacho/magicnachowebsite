/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { tw } from '@twind';
import { css, apply, theme } from 'twind/css'
import { walkSync } from 'https://deno.land/std@0.146.0/fs/mod.ts';

function getPages() {
	var route = new Array();
	for (const entry of walkSync('./routes')) {
		// console.log('entry path: ', entry.path);
		const splitString = entry.path.split('/')[1];
		if (splitString) {
			const file = splitString.slice(0, -4) === 'index'
				? 'home'
				: splitString.slice(0, -4);
			// console.log("files: ", file)
			route.push(file);
		}
	}
	console.log('route: ', route);
	return route;
}

const logoStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
};

const navStyle = css({
	nav: {
		borderBottom: '1px solid black',
		borderTop: '1px solid black'
	},

	'.navigation': {
		display: 'inline-block'
	},

	'.navigation ol': {
		listStyleType: 'none',
		paddingLeft: '0',
	},

	'.navigation a::after': { 
		color: 'black',
		content: '" | "',
		fontSize: '80%',
		padding: '0 3px',
	},
  });


export default function NavBar() {
	const pageArray = getPages();

	return (
		<div class={tw(navStyle)}>

			<nav class={tw`py-3`}>
                <ol class={'navigation'}>
                    <li class={'navigation'}>
                        {pageArray.map((page) => {
                        const pageString = `/${page === 'home' ? 'index.tsx' : page}`
                        const pageTitle = page.toUpperCase();
                        return <a href={pageString} >{pageTitle}</a> 
                        })}
                    </li>
                </ol>
			</nav>
		</div>
	);
}
