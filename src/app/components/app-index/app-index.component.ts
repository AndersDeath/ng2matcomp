import { Component, Inject, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventEmitterService } from '../../services/event-emitter/event-emitter.service';

@Component({
	selector: 'app-index',
	templateUrl: './app-index.component.html',
	styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit, OnDestroy {

	constructor(
		private el: ElementRef,
		private emitter: EventEmitterService,
		private route: ActivatedRoute,
		@Inject('Window') private window: Window
	) {
		// console.log('AppIndexComponent, element ref', this.el);
	}

	private subscriptions: any[] = [];

	public title: string = 'Components library directory';

	public demo: any = {
		off: true,
		customButton: false
	};

	/**
	 * component lifecycle
	 */
	public ngOnInit(): void {
		let sub = this.emitter.getEmitter().subscribe((event: any) => {
			console.log('AppIndexComponent, event emitter subscription', event);
		});
		this.subscriptions.push(sub);

		/*
		*	subscribe to query params changes and switch display mode
		*/
		sub = this.route.queryParamMap.subscribe((queryParams: Params) => {
			let selectedItem: string = queryParams.get('demo');
			// console.log('selectedItem', selectedItem)
			if (!selectedItem) {
				selectedItem = 'off';
			}
			for (const key in this.demo) {
				// console.log('key', key);
				this.demo[key] = (key === selectedItem) ? true : false;
			}
		});
		this.subscriptions.push(sub);
	}
	public ngOnDestroy(): void {
		if (this.subscriptions.length) {
			for (const sub of this.subscriptions) {
				sub.unsubscribe();
			}
		}
	}
}
