import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatgptService } from '../services/chatgpt.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private route: Router,
    private chatgptService: ChatgptService
  ) { }

  ngOnInit(): void {
  }

  navigateToDefaultConversion() {
    this.route.navigate(['/new'])
    this.chatgptService.setSelectedChatTitle(undefined);
  }
}
