import { Component, OnInit } from '@angular/core';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedChat: ChatInformation;

  constructor(private chatGptService: ChatgptService) { }

  ngOnInit(): void {
    this.chatGptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    });
  }

}
