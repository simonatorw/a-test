import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Banner2Component } from './banner2.component';
import { Banner2Service } from './banner2.service';


describe('Banner2Component', () => {
	let component: Banner2Component;
	let fixture: ComponentFixture<Banner2Component>;
	let de: DebugElement;
	let el: HTMLElement;
	let banner2ServiceStub;
	let banner2Service;
	let spy;
	let de2;
	let el2;

	beforeEach(async(() => {
		banner2ServiceStub = {
			getTitle: function() {
				return 'duh';
			},
			getData: function() {
				return 'duh2';
			}
		};
		
		TestBed.configureTestingModule({
			providers: [
				{ provide: Banner2Service, useValue: banner2ServiceStub }
			],
			declarations: [ Banner2Component ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Banner2Component);
		component = fixture.componentInstance;
		
		banner2Service = fixture.debugElement.injector.get(Banner2Service);

		spy = spyOn(banner2Service, 'getData')
			.and.returnValue(Promise.resolve('kittens'));
		
		de = fixture.debugElement.query(By.css('.title'));
		el = de.nativeElement;
		
		de2 = fixture.debugElement.query(By.css('.data'));
		el2 = de2.nativeElement;
		
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('should match title', fakeAsync(() => {
		tick();
		console.log(component.title, el2.textContent, component.data)
		expect(el.textContent).toEqual(component.title);
	}));
});
