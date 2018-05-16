import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {

	let comp:    BannerComponent;
	let fixture: ComponentFixture<BannerComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ BannerComponent ], // declare the test component
			providers: [
				{ provide: ComponentFixtureAutoDetect, useValue: true }
			]
		});

		fixture = TestBed.createComponent(BannerComponent);

		comp = fixture.componentInstance; // BannerComponent test instance

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
	});
	
	it('should display original title', () => {
		//fixture.detectChanges();
		expect(el.textContent).toContain(comp.title);
	});
	
	it('should display a different test title', () => {
		comp.title = 'Test Title';
		fixture.detectChanges();
		expect(el.textContent).toContain(comp.title);
	});
});