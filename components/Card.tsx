/** @jsx h */
import { h } from 'preact';

interface ICardProps {
	contentTitle: string;
	contentBody: string;
}

// Pass in contentTitle and contentBody.
// will return a standard content card
export default function Card(props: ICardProps){
	const title = props.contentTitle ? props.contentTitle : '';
	const body = props.contentBody ? props.contentBody : '';

	return (
		<section class={'content'}>
			<h1>{title}</h1>
			<br></br>
			<div dangerouslySetInnerHTML={{ __html: body }} />
		</section>
	);
}
