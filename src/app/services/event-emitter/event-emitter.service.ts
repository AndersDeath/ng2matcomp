import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {

	/**
	 * Event emitter instance.
	 */
	private emitter: EventEmitter<object> = new EventEmitter();

	/**
	 * Gets event emitter instance.
	 */
	public getEmitter(): EventEmitter<object> {
		return this.emitter;
	}

	/**
	 * Emits arbitrary event.
	 */
	public emitEvent(object): void {
		this.emitter.emit(object);
	}
}
