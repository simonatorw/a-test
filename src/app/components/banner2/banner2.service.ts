import { Injectable } from '@angular/core';

@Injectable()
export class Banner2Service {

	constructor() { }

	getTitle() {
		return 'foobar';
	}

	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('booyah');
			}, 2000);
		});
	}

}
