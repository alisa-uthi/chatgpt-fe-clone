import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChatgptService } from '../services/chatgpt.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  constructor(
    private route: Router,
    private chatgptService: ChatgptService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  navigateToDefaultConversion() {
    this.route.navigate(['/new'])
    this.chatgptService.setSelectedChatTitle(undefined);
  }
}
