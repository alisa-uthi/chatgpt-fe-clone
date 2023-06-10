import { Component, OnInit } from '@angular/core';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-chat-history-titles',
  templateUrl: './chat-history-titles.component.html',
  styleUrls: ['./chat-history-titles.component.scss']
})
export class ChatHistoryTitlesComponent implements OnInit {
  allChats: any;
  selectedChat: ChatInformation;
  deletedChatId: string | null = null;
  private subs = new SubSink();
  
  constructor(private chatGptService: ChatgptService) { }

  ngOnInit(): void {
    this.subs.add(
      this.chatGptService.allChats.subscribe(chats => {
        this.allChats = chats;
      }),
      this.chatGptService.selectedChatTitle.subscribe(chat => {
        this.selectedChat = chat;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSelectChat(chat: ChatInformation) {
    this.chatGptService.onSelectChatTitle(chat);
  }

  onDeleteChat(chatId: string) {
    this.deletedChatId = chatId;
  }

  onConfirmDeleteChat() {
    if (this.deletedChatId) {
      this.chatGptService.deleteChat(this.deletedChatId);
    }
  }

  onCancelDeleteChat() {
    this.deletedChatId = null;
  }

  returnZero(): number {
    return 0;
  }
}
