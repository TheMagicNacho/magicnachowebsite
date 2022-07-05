/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { tw } from '@twind';
import { walkSync } from 'https://deno.land/std@0.146.0/fs/mod.ts';
import NavBar from './NavBar.tsx'

interface LogoProps {
	title: string;
}

const logoStyle = {
	marginLeft: 'auto',
	marginRight: 'auto',
};


export default function Logo(props: LogoProps) {
	

	return (
		<div class={tw`flex flex-col justify-center`}>
			<div>
				<h1 class={tw`text-5xl`}>
					{props.title}
				</h1>
			</div>

			<div class={tw`py-3`}>
				<img
					style={logoStyle}
					src={`/gif/${Math.floor(Math.random() * 3)}.gif`}
					alt="A cool gif. They're all the rage."
				/>
			</div>

			<NavBar />

		</div>
	);
}
