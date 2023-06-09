import { Component, OnInit } from '@angular/core';
import { ChatHistoryInformation, ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';

@Component({
  selector: 'app-chat-history-titles',
  templateUrl: './chat-history-titles.component.html',
  styleUrls: ['./chat-history-titles.component.scss']
})
export class ChatHistoryTitlesComponent implements OnInit {
  chatHistoryInfos: ChatHistoryInformation[];

  selectedChat: ChatInformation;
  
  constructor(private chatGptService: ChatgptService) { }

  ngOnInit(): void {
    this.chatHistoryInfos = this.chatGptService.getChatHistoryInformationList();
    this.chatGptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    })
  }

  onSelectChat(chat: ChatInformation) {
    this.chatGptService.onSelectChatTitle(chat);
  }

}
