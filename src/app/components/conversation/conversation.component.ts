import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  @ViewChildren('copyIcon') copyIcon: QueryList<MatIcon>;

  selectedChat: ChatInformation | null | undefined;

  constructor(
    private chatGptService: ChatgptService,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
    this.chatGptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    });
  }

  copyMessage(chatId: string, message: string) {
    this.clipboard.copy(message);
    
    const selectedMessage = this.copyIcon.find((matIcon: MatIcon) => matIcon._elementRef.nativeElement.id == `copy-icon-${chatId}`);
    if (!!selectedMessage) {
      selectedMessage.svgIcon = 'icon-check';
      setTimeout(() => {
        selectedMessage.svgIcon = 'icon-content-paste';
      }, 1000)
    }
  }
}
