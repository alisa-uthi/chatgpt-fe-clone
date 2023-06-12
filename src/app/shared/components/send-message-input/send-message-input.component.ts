import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatInformation } from '../../models/chat-history-information.model';
import { ChatgptService } from '../../services/chatgpt.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-send-message-input',
  templateUrl: './send-message-input.component.html',
  styleUrls: ['./send-message-input.component.scss']
})
export class SendMessageInputComponent implements OnInit {
  selectedChat: ChatInformation | null | undefined;
  private subs = new SubSink();

  constructor(
    private fb: FormBuilder,
    private chatgptService: ChatgptService
  ) { }

  form = this.fb.group({
    message: ['', Validators.required]
  });

  ngOnInit(): void {
    this.subs.add(
      this.chatgptService.selectedChatTitle.subscribe(chat => {
        this.selectedChat = chat;
      }),
      this.chatgptService.inputMessage.subscribe(input => {
        this.form.get('message')?.setValue(input);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      if (!this.selectedChat) {
        this.chatgptService.createNewChat(this.form.get('message')!.value!)
      } else {
        this.chatgptService.addMessageToChat(this.form.get('message')!.value!, this.selectedChat!.id);
      }
      this.form.reset();
    }
  }
}
