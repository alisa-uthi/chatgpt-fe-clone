import { Component, OnInit } from '@angular/core';
import { ChatInformation } from 'src/app/shared/models/chat-history-information.model';
import { ChatgptService } from 'src/app/shared/services/chatgpt.service';

@Component({
  selector: 'app-chat-titles',
  templateUrl: './chat-titles.component.html',
  styleUrls: ['./chat-titles.component.scss']
})
export class ChatTitlesComponent implements OnInit {
  allChats: any;
  
  constructor(private chatGptService: ChatgptService) { }

  ngOnInit(): void {
    this.chatGptService.allChats.subscribe(chats => {
      this.allChats = chats;
    });
  }

  returnZero(): number {
    return 0;
  }
}
