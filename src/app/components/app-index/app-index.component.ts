import { Component, Inject, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventEmitterService } from '../../services/event-emitter/event-emitter.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/first';

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

	private ngUnsubscribe: Subject<void> = new Subject();

	public title: string = 'Components library directory';

	public demo: any = {
		off: true,
		customButton: false
	};

	/**
	 * component lifecycle
	 */
	public ngOnInit(): void {
		this.emitter.getEmitter().takeUntil(this.ngUnsubscribe).subscribe((event: any) => {
			console.log('AppIndexComponent, event emitter subscription', event);
		});

		/*
		*	subscribe to query params changes and switch display mode
		*/
		this.route.queryParamMap.takeUntil(this.ngUnsubscribe).subscribe((queryParams: Params) => {
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
	}
	public ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
