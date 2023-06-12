import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-card',
  templateUrl: './usage-card.component.html',
  styleUrls: ['./usage-card.component.scss']
})
export class UsageCardComponent implements OnInit {
  @Input() isClickable: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
