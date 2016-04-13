import {Component, View} from 'angular2/core';

@Component({
	selector: 'App'
})
@View({
	template: `
    <h2>Angular2</h2>
    <p>hello {{test}}</p>
  `
})
export class App {
	test: string;

	constructor() {
		this.test = 'world';
	}
}
