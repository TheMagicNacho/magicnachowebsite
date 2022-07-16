/** @jsx h */
// import { walkSync } from 'https://deno.land/std@0.146.0/fs/mod.ts';
import manifest from '../fresh.gen.ts';



export default class Helper {
	public static getPages() {
		var route = new Array();

		const routes = manifest.routes;

		for (const key in routes) {
			var name: string = '';
			var file = key.split('/')[2]
			file = file.slice(0, -4);

			if (file === 'index'){
				name = 'home'
			} else {
				name = file
			}
			route.push(name)
		  }
		// console.log('route: ', route);
		return route;
	}

	// public static getTiles() {
	// 	var tile = new Array();
	// 	for (const entry of walkSync('./static/tiles')) {
	// 		// console.log('entry path: ', entry.path);
	// 		const splitString = entry.path.split('/')[1];
	// 		if (splitString) {
	// 			tile.push(splitString);
	// 		}
	// 	}
	// 	// console.log('route: ', route);
	// 	return tile;
	// }

	// public static getBanner() {
	// 	var banners = new Array();
	// 	for (const entry of walkSync('./static/banner/')) {
	// 		// console.log('entry path: ', entry.path);
	// 		const splitString = entry.path.split('/')[2];
	// 		if (splitString) {
	// 			banners.push(splitString);
	// 		}
	// 	}
	// 	// console.log('banners: ', banners);
	// 	return banners;
	// }
}
// export function getPages() {
// 	var route = new Array();
// 	for (const entry of walkSync('./routes')) {
// 		// console.log('entry path: ', entry.path);
// 		const splitString = entry.path.split('/')[1];
// 		if (splitString) {
// 			const file = splitString.slice(0, -4) === 'index'
// 				? 'home'
// 				: splitString.slice(0, -4);
// 			// console.log("files: ", file)
// 			route.push(file);
// 		}
// 	}
// 	// console.log('route: ', route);
// 	return route;
// }

// export function getTiles() {
// 	var route = new Array();
// 	for (const entry of walkSync('./static/tiles')) {
// 		// console.log('entry path: ', entry.path);
// 		const splitString = entry.path.split('/')[1];
// 		if (splitString) {
// 			const file = splitString.slice(0, -4) === 'index'
// 				? 'home'
// 				: splitString.slice(0, -4);
// 			// console.log("files: ", file)
// 			route.push(file);
// 		}
// 	}
// 	console.log('route: ', route);
// 	return route;
// }
