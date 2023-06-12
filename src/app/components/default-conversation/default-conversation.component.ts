import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-conversation',
  templateUrl: './default-conversation.component.html',
  styleUrls: ['./default-conversation.component.scss']
})
export class DefaultConversationComponent implements OnInit {

  exampleMessages: string[] = [
    "Explain quantum computing in simple terms",
    "Got any creative ideas for a 10 year old’s birthday?",
    "How do I make an HTTP request in Javascript?"
  ];

  capabilities: string[] = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests"
  ];

  limitations: string[] = [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
