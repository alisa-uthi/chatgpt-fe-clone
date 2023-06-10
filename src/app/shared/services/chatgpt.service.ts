import { Injectable } from '@angular/core';
import { ChatInformation, Message } from '../models/chat-history-information.model';
import { BehaviorSubject } from 'rxjs';
import { getDisplayedCreatedPeriod, getMockCreatedDate } from '../utils/datetime-utils';
import { nanoid } from 'nanoid';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  
  private chats: ChatInformation[] = [
    {
      id: '093d5f9d-7436-4360-9bf1-4e297576c028',
      title: 'This is a very long title5555555',
      createdDate: getMockCreatedDate('today'),
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
    },
    {
      id: '52e1b9b0-137a-42ef-8bff-c51d0ce0869f',
      title: 'Title Yesterday 1',
      createdDate: getMockCreatedDate('yesterday'),
      messages: [
        {
          id: '25d580e5-72db-41e4-96ad-dc6aaa470jkf',
          sender: 'me',
          content: 'Well, well'
        },
        {
          id: '3704d387-49a9-4b54-9b42-a593ogs5f89b',
          sender: 'chatgpt',
          content: 'Lorem Lorem Lorem Lorem'
        },
      ]
    },
    {
      id: '2bc42646-af0f-44de-bfed-06e0faf6096b',
      title: 'Title Yesterday 2',
      createdDate: getMockCreatedDate('yesterday'),
    },
    {
      id: '7d3b496c-18c8-49fa-9194-ae20c7ce357l',
      title: 'Title Previous 7-1',
      createdDate: getMockCreatedDate('last_week'),
    },
    {
      id: '705df8b9-6fee-4f1f-861b-27451528d2da',
      title: 'Title Previous 7-2',
      createdDate: getMockCreatedDate('last_week'),
    },
    {
      id: '7drm96c-18c8-49fa-e194-arc0c7ce357e',
      title: 'Title Previous 30-1',
      createdDate: getMockCreatedDate(),
    },
    {
      id: 'b95r5mb9-3fge-4ep7-864j-27451528d2ty',
      title: 'Title Previous 30-2',
      createdDate: getMockCreatedDate(),
    }
  ];

  constructor(private router: Router) { }

  getChatInfosGroupByCreatedPeriod(): {} {
    return this.chats
      .map(chat => {
        return {...chat, dateText: getDisplayedCreatedPeriod(chat.createdDate)}
      })
      .reduce((groups, item) => ({
        ...groups,
        [item.dateText]: [...(groups[item.dateText] || []), item]
      }), {});;
  }

  private allChatsSubject = new BehaviorSubject(this.getChatInfosGroupByCreatedPeriod());
  public allChats = this.allChatsSubject.asObservable();

  private selectedChatTitleSubject = new BehaviorSubject<(ChatInformation)>(
    this.getChatInfosGroupByCreatedPeriod()[Object.keys(this.getChatInfosGroupByCreatedPeriod())[0]][0]
  );
  public selectedChatTitle = this.selectedChatTitleSubject.asObservable();

  onSelectChatTitle(chat: ChatInformation): void {
    this.router.navigate(['/c', chat.id ]);
    this.selectedChatTitleSubject.next(chat);
  }

  addMessageToChat(message: string, chatId: string) {
    const chat = this.chats.find(chat => chat.id == chatId);
    if (!!chat) {
      const newMessage: Message[] = [
        {
          id: nanoid(),
          content: message,
          sender: 'me'
        },
        {
          id: nanoid(),
          content: 'This is a mock reply from ChatGPT',
          sender: 'chatgpt'
        }
      ];
      chat.messages?.push(...newMessage);
      this.selectedChatTitleSubject.next(chat);
    }
  }

  deleteChat(chatId: string) {
    this.chats = this.chats.filter(chat => chat.id != chatId);
    this.allChatsSubject.next(this.getChatInfosGroupByCreatedPeriod());
  }

  editChatTitle(chatId: string, title: string) {
    const chat = this.chats.find(chat => chat.id == chatId);
    if (!!chat) {
      chat.title = title;
      this.allChatsSubject.next(this.getChatInfosGroupByCreatedPeriod());
    }
  }
}
