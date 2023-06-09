import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatInformation } from '../../models/chat-history-information.model';
import { ChatgptService } from '../../services/chatgpt.service';

@Component({
  selector: 'app-send-message-input',
  templateUrl: './send-message-input.component.html',
  styleUrls: ['./send-message-input.component.scss']
})
export class SendMessageInputComponent implements OnInit {
  selectedChat: ChatInformation;

  constructor(
    private fb: FormBuilder,
    private chatgptService: ChatgptService
  ) { }

  form = this.fb.group({
    message: ['', Validators.required]
  });

  ngOnInit(): void {
    this.chatgptService.selectedChatTitle.subscribe(chat => {
      this.selectedChat = chat;
    });
  }

  onSubmit() {
    console.log('onsubmit');
    if (this.form.valid) {
      this.chatgptService.addMessageToChat(this.form.get('message')!.value!, this.selectedChat.id);
    }
  }
}
