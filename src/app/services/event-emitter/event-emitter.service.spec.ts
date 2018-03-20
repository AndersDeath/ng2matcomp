import { TestBed, async } from '@angular/core/testing';

import { EventEmitterService } from './event-emitter.service';

describe('EventEmitterService', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				EventEmitterService
			]
		}).compileComponents().then(() => {
			this.service = TestBed.get(EventEmitterService) as EventEmitterService;
		});
	}));

	it('should exist', () => {
		expect(this.service).toBeTruthy();
		expect(this.service.emitter).toBeDefined();
		expect(this.service.emitEvent).toEqual(jasmine.any(Function));
		expect(this.service.getEmitter).toEqual(jasmine.any(Function));
	});
});
