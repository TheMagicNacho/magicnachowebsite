/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { tw } from '@twind';
import Helper from '../utils/Helper.ts'
import { apply, css, theme } from 'twind/css';



const navStyle = css({
	'.navigation': {
		display: 'inline-block',
		padding: '1vh',
	},

	'.navigation ol': {
		listStyleType: 'none',
		paddingLeft: '0',
	},

	'.navigation a:not(:last-child):after': {
		color: 'black',
		content: '" | "',
		fontSize: '80%',
		padding: '0 3px',
	},
});

export default function NavBar(): h.JSX.Element {
	const pageArray = Helper.getPages();

	return (
		<div class={tw(navStyle)}>
			<nav>
				<ol class={'navigation'}>
					<li class={'navigation'}>
						{pageArray.map((page: string, index: number) => {
							const pageString = `/${
								page === 'home' ? 'index.tsx' : page
							}`;
							const pageTitle = page.toUpperCase();

							return <a href={pageString}>{pageTitle}</a>;
						})}
					</li>
				</ol>
			</nav>
		</div>
	);
}
