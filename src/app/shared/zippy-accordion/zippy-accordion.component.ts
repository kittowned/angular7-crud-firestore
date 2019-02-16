import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy-accordion',
  templateUrl: './zippy-accordion.component.html',
  styleUrls: ['./zippy-accordion.component.css']
})
export class ZippyAccordionComponent implements OnInit {
@Input('items') items;


  constructor() { }

  ngOnInit() {
  }

}
