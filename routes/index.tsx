/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Header from '../components/HeaderComp.tsx';
import Footer from '../components/FooterComp.tsx';
import { globalStyles } from '../style/globalStyle.ts';
import { Handlers, PageProps } from "$fresh/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";


interface IAirtableELement {
	id: string;
	createdTime: string;
	fields: IDataField;
}

interface IDataField{
	Title: string;
	Value: any;
	Name: string;
}

interface IMarkdown {
	content: string;
	meta: object;
}

type dataBallType = {
    [key: string]: IDataField
}
export const handler = {
	async GET(_: any, ctx: any) {
	//   const { username } = ctx.params;
	  const dataBall: dataBallType = {} ;

	  const resp = await fetch(`https://api.airtable.com/v0/appCotDAMCWnwCBQc/SiteContext?api_key=keyu5X8dyarA2BVAw`);
	  if (resp.status === 404) {
		return ctx.render(null);
	  }
	  const res = await resp.json();
	  const records = res.records;

	  records.forEach(async (e: IAirtableELement) => {
		const key: string = e.fields.Name ? e.fields.Name as string : '';
		const value: IMarkdown = Marked.parse(e.fields.Value) ? Marked.parse(e.fields.Value) : {} as IMarkdown;
		// console.log('value:  ', value.content)
		// const html = 

		const dataItem: IDataField = {
			Title: e.fields.Title,
			Value: value.content,
			Name: key
		}

		dataBall[key] = dataItem;
	  });
	  
	  return ctx.render(dataBall);
	},
  };


export default function Home({ data }:PageProps<any>): h.JSX.Element {

	const aboutContent = data.indexAbout.Value ? data.indexAbout.Value : '';
	
	return (
		<div class={tw(globalStyles)}>

			<Header title={'The Magic Nacho'} />

			<section class={'content'}>
				<h2>{data.indexAbout.Title}</h2>
				<div dangerouslySetInnerHTML={{ __html: aboutContent }} />
			
			</section>

			<Footer content={data.footerContent} social={data.socialLinkSmall}/>
			
		</div>
	);
}
