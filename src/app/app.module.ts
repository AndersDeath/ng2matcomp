import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { FlexLayoutModule } from '@angular/flex-layout';

import '../../node_modules/hammerjs/hammer.js';
import { CustomMaterialModule } from './modules/custom-material.module';

import { AppComponent } from './components/app/app.component';
import { AppIndexComponent } from './components/app-index/app-index.component';

import { EventEmitterService } from './services/event-emitter/event-emitter.service';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomButtonDemoComponent } from './components/custom-button-demo/custom-button-demo.component';

@NgModule({
	declarations: [
		AppComponent, AppIndexComponent, CustomButtonComponent, CustomButtonDemoComponent
	],
	imports: [
		BrowserModule, BrowserAnimationsModule, FlexLayoutModule, CustomMaterialModule,
		FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(APP_ROUTES)
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' }, { provide: LocationStrategy, useClass: PathLocationStrategy },
		{ provide: 'Window', useValue: window }, EventEmitterService
	],
	schemas  : [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
