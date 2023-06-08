import { Component, Input, OnInit } from '@angular/core';
import { ChatHistoryInformation, ChatInformation } from 'src/app/shared/models/chat-history-information.model';

@Component({
  selector: 'app-chat-history-titles',
  templateUrl: './chat-history-titles.component.html',
  styleUrls: ['./chat-history-titles.component.scss']
})
export class ChatHistoryTitlesComponent implements OnInit {
  @Input() chatHistoryInfos: ChatHistoryInformation[];

  selectedChat: ChatInformation;
  

  constructor() { }

  ngOnInit(): void {
    this.selectedChat = this.chatHistoryInfos[0].chatList[0];
  }

  onSelectChat(chat: ChatInformation) {
    this.selectedChat = chat;
  }

}
