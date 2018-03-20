import { Component, ElementRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit, OnChanges {

  constructor(
  	private el: ElementRef
  ) {
  	// console.log('custom button constructor, element', this.el);
  }

  @Input('text') public text: string = 'custom-button works!';

  ngOnInit() {
  	// console.log('custom button initialized');
  }

  ngOnChanges(event: SimpleChanges): void {
  	console.log('custom button, changes', event);
  }

}
