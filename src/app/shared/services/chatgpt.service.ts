import { Injectable } from '@angular/core';
import { ChatHistoryInformation, ChatInformation } from '../models/chat-history-information.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  
  chats: ChatHistoryInformation[] = [
    {
      dateText: 'Today',
      chatList: [
        {
          id: '093d5f9d-7436-4360-9bf1-4e297576c028',
          title: 'This is a very long title',
          messages: [
            {
              id: '25d580e5-72db-41e4-96ad-dc6aaa470863',
              sender: 'me',
              content: 'Hello World!'
            },
            {
              id: '3704d387-49a9-4b54-9b42-a5939f66f89b',
              sender: 'chatgpt',
              content: 'Hello! "Hello World" is a common phrase used in computer programming as a simple introductory example. It is often used to demonstrate the basic syntax and functionality of a programming language. If you have any specific questions or need assistance with something related to programming or any other topic, feel free to ask!'
            },
          ]
        }
      ]
    },
    {
      dateText: 'Yesterday',
      chatList: [
        {
          id: '52e1b9b0-137a-42ef-8bff-c51d0ce0869f',
          title: 'Title Yesterday 1'
        },
        {
          id: '2bc42646-af0f-44de-bfed-06e0faf6096b',
          title: 'Title Yesterday 2'
        }
      ]
    },
    {
      dateText: 'Previous 30 Days',
      chatList: [
        {
          id: '7d3b496c-18c8-49fa-9194-ae20c7ce357e',
          title: 'Title Previous 1'
        },
        {
          id: '705df8b9-6fee-4f1f-861b-27451528d2de',
          title: 'Title Previous 2'
        }
      ]
    }
  ];

  private selectedChatTitleSubject = new BehaviorSubject<(ChatInformation)>(this.chats[0].chatList[0]);
  selectedChatTitle = this.selectedChatTitleSubject.asObservable();

  constructor() { }

  getChatHistoryInformationList(): ChatHistoryInformation[] {
    return this.chats;
  }

  onSelectChatTitle(chat: ChatInformation): void {
    this.selectedChatTitleSubject.next(chat);
  }

  addMessageToChat(message: string, chatId: string) {
    // TODO
  }
}
