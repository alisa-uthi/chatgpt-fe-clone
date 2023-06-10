import { Component, OnInit } from '@angular/core';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  selectedChat: ChatInformation;

  constructor(private chatGptService: ChatgptService) { }

  ngOnInit(): void {
    this.chatGptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    });
  }
}
