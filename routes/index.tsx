/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import LogoComp from '../components/LogoComp.tsx';
import { globalStyles } from '../style/globalStyle.ts'


export default function Home() {
	return (
		<div class={tw(globalStyles)}>
			<LogoComp title={'The Magic Nacho'} />

			{
				/* <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      /> */
			}
			<p class={tw`my-6`}>
				Welcome to `fresh`. Try update this message in the
				./routes/index.tsx file, and refresh.
			</p>
		</div>
	);
}
