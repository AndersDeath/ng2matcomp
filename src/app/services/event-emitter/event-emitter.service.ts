import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {
	private emitter: EventEmitter<object> = new EventEmitter();
	public emitEvent(object): void {
		this.emitter.emit(object);
	}
	public getEmitter(): EventEmitter<object> {
		return this.emitter;
	}
}
