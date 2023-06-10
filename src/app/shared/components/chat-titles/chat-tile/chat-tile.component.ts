import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { MODE } from 'src/app/shared/models/common.constant';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';

@Component({
  selector: 'app-chat-tile',
  templateUrl: './chat-tile.component.html',
  styleUrls: ['./chat-tile.component.scss']
})
export class ChatTileComponent implements OnInit {

  @Input() chat: ChatInformation;

  selectedChat: ChatInformation;
  editeChatTitleId: string | null = null;
  deletedChatId: string | null = null;
  MODE = MODE;
  mode: string = MODE.VIEW;

  constructor(
    private chatGptService: ChatgptService,
    private fb : FormBuilder
  ) { }

  chatForm = this.fb.group({
    title: ['']
  });
  
  ngOnInit(): void {
    this.chatGptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    })
  }

  onSelectChat(chat: ChatInformation) {
    this.chatGptService.onSelectChatTitle(chat);
  }

  onEditChat(chatId: string) {
    this.editeChatTitleId = chatId;
    this.mode = MODE.EDIT;
    // this.deletedChatId = null;
  }

  onDeleteChat(chatId: string) {
    this.deletedChatId = chatId;
    this.mode = MODE.DELETE;
    // this.editeChatTitleId = null;
  }

  onConfirm() {
    if (this.mode == MODE.DELETE && this.deletedChatId) {
      this.chatGptService.deleteChat(this.deletedChatId);
      this.editeChatTitleId = null;
    }
    this.mode = MODE.VIEW;
  }

  onCancel() {
    this.editeChatTitleId = null;
    this.deletedChatId = null;
    this.mode = MODE.VIEW;
  }
}
