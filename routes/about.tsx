/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Header from '../components/HeaderComp.tsx';
import Footer from '../components/FooterComp.tsx';
import { globalStyles } from '../style/globalStyle.ts';

export default function Home() {
	return (
		<div class={tw(globalStyles)}>
			<Header title={'The Magic Nacho'} />

			<p class={tw`my-6`}>
				Welcome to `fresh`. Try update this message in the
				./routes/index.tsx file, and refresh.
			</p>

			<Footer />
		</div>
	);
}
