import { Injectable } from '@angular/core';
import { ChatHistoryInformation } from '../models/chat-history-information.model';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  chats: ChatHistoryInformation[] = [
    {
      dateText: 'Today',
      chatList: [
        {
          title: 'This is a very long title'
        }
      ]
    },
    {
      dateText: 'Yesterday',
      chatList: [
        {
          title: 'Title Yesterday 1'
        },
        {
          title: 'Title Yesterday 2'
        }
      ]
    },
    {
      dateText: 'Previous 30 Days',
      chatList: [
        {
          title: 'Title Previous 1'
        },
        {
          title: 'Title Previous 2'
        }
      ]
    }
  ];

  constructor() { }

  getChatHistoryInformationList(): ChatHistoryInformation[] {
    return this.chats;
  }
}
