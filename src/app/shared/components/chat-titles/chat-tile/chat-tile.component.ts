import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    title: ['', Validators.required]
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
    this.chatForm.get('title')?.setValue(this.chat.title);
  }

  onDeleteChat(chatId: string) {
    this.deletedChatId = chatId;
    this.mode = MODE.DELETE;
  }

  onShareChat(chatId: string) {
    alert('Not Implemented :)');
  }

  onConfirm() {
    if (this.mode == MODE.EDIT && this.editeChatTitleId) {
      if (this.chatForm.invalid) return;
      this.chatGptService.editChatTitle(this.editeChatTitleId, this.chatForm.get('title')?.value!)
    } else if (this.mode == MODE.DELETE && this.deletedChatId) {
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
