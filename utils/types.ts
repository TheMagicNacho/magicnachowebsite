export interface IAirtableELement {
	id: string;
	createdTime: string;
	fields: IDataField;
}

interface IQuipField {
	Post: string;
}

export interface IDataField {
	Title: string;
	Value: any;
	Name: string;
}

export interface IMarkdown {
	content: string;
	meta: object;
}

export type dataBallType = {
	[key: string]: IDataField;
};

export interface IQuip {
	Date: string;
	Post: string;
}
