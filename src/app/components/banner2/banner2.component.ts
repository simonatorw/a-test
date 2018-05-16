import { Component, OnInit } from '@angular/core';

import { Banner2Service } from './banner2.service';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component implements OnInit {
	constructor(
		private banner2Service: Banner2Service
	) { }
	
	title: string = this.banner2Service.getTitle();
	data: object;
	
	ngOnInit() {
		this.banner2Service.getData().then(data => {
			this.data = data;
		});
	}	
}
