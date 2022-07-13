/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { tw } from '@twind';
import Helper from '../utils/Helper.ts';
import { apply, css, theme } from 'twind/css';
import { Handlers, PageProps } from "$fresh/server.ts"

const logoStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
	height: '30vh',
};

const footerStyle = css({
	'.footer-col-split': {
		textAlign: 'center',
		flexGrow: '1',
		maxWidth: '50%',
		padding: '1rem',
	},

	'.footer-col-span': {
		textAlign: 'center',
		flexGrow: '1',
		padding: '1rem',
	},

	'.break': {
		flexBasis: '100%',
		height: '0',
	},

	// '.footer-navigation': {
	//     lineBreak: 'auto',
	//     color: 'red',
	// },

	'.footer-navigation li': {
		display: 'inline',
		// padding: '1vh',
	},

	'.footer-navigation ol': {
		listStyleType: 'none',
		paddingLeft: '0',
	},
	// '.footer-navigation a::before': {
	// 	color: 'black',
	// 	content: '" - "',
	// 	fontSize: '80%',
	// 	padding: '0 3px',
	// },
});

interface IFooterProps {
	content: IDataField;
	social: IDataField;
}

interface IDataField{
	Title: string;
	Value: string;
	Name: string;
}

export default function Footer(props: IFooterProps): h.JSX.Element {
	const pageArray = Helper.getPages();
    const today = new Date();
	const footerContent = props.content.Value ? props.content.Value : '';
	const socialContent = props.social.Value ? props.social.Value : '';

	// console.log("footer data", props.data)

	return (
		<footer class={tw(footerStyle)}>
			<div class={'footer-col-split'}>
				{/* <div class={tw(navStyle)}> */}
				<nav>
					<ol class={'footer-navigation'}>
						<li class={'footer-navigation'}>
							{pageArray.map((page: string, index: number) => {
								const pageString = `/${
									page === 'home' ? 'index.tsx' : page
								}`;
								const pageTitle = page.toUpperCase();

								return (
									<div>
										<a href={pageString}>{pageTitle}</a>
										<br></br>
									</div>
								);
							})}
						</li>
					</ol>
				</nav>
				{/* </div> */}
			</div>

			<div class={'footer-col-split'}>
				<h3>{props.content.Title}</h3>
				<div dangerouslySetInnerHTML={{ __html: footerContent }} />
			</div>
							
			<div class={'break'}></div>

			<div class={'footer-col-span'}>
				<div dangerouslySetInnerHTML={{ __html: socialContent }} />
			</div>

			<div class={'break'}></div>

			<div class={'footer-col-span'}>
			    &copy; {today.getFullYear()} : TheMagicNacho
			</div>
		</footer>
	);
}
