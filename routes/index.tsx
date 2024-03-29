/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Header from '../components/HeaderComp.tsx';
import Footer from '../components/FooterComp.tsx';
import Card from '../components/Card.tsx';
import { globalStyles } from '../style/globalStyle.ts';
import { PageProps } from '$fresh/server.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts'; // load .env
import {
	dataBallType,
	IAirtableELement,
	IDataField,
	IMarkdown,
} from '../utils/types.ts';
import { Marked } from 'https://deno.land/x/markdown@v2.0.0/mod.ts';

// Calls need to occur on the route directly and use the handler keyword.
// ref: https://fresh.deno.dev/docs/getting-started/fetching-data
const table = 'SiteContext';
export const handler = {
	async GET(_: any, ctx: any) {
		//   Gather all data from airtable.
		const dataBall: dataBallType = {};
		const resp = await fetch(
			`https://api.airtable.com/v0/${
				Deno.env.get('DB_NAME')
			}/${table}?api_key=${Deno.env.get('DB_KEY')}`,
		);
		if (resp.status === 404) {
			return ctx.render(null);
		}
		const res = await resp.json();
		const records = res.records;

		records.forEach(async (e: IAirtableELement) => {
			const key: string = e.fields.Name ? e.fields.Name as string : '';
			const value: IMarkdown = Marked.parse(e.fields.Value)
				? Marked.parse(e.fields.Value)
				: {} as IMarkdown;

			const dataItem: IDataField = {
				Title: e.fields.Title,
				Value: value.content, //text stored in markdown on airtable is converted to HTML here.
				Name: key,
			};

			dataBall[key] = dataItem;
		});
		// pass the data object as a prop.
		return ctx.render(dataBall);
	},
};

// the title can be passed directly.
// the actuall content is passed as formatted HTML that is generated by the Markdown engine
export default function Home({ data }: PageProps<any>): h.JSX.Element {
	const content: string = data.indexAbout.Value ? data.indexAbout.Value : '';
	const title: string = data.indexAbout.Title ? data.indexAbout.Title : '';

	return (
		<div class={tw(globalStyles)}>
			<Header title={'The Magic Nacho'} />

			<Card contentBody={content} contentTitle={title} />

			<Footer
				content={data.footerContent}
				social={data.socialLinkSmall}
			/>
		</div>
	);
}
