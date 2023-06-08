import { Component, Input, OnInit } from '@angular/core';
import { ChatHistoryInformation } from '../../models/chat-history-information.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() chats: ChatHistoryInformation[];

  constructor() { }

  ngOnInit(): void {
    this.chats = [
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
  }
}
