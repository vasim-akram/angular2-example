import {Component} from '@angular/core';
import {MessageService} from './message-service';
import {Message} from './message';
import {OnInit} from "@angular/core";

@Component({
  selector: 'message-list',
  template: `List of messages <br>
              <ul>
                  <li *ngFor="let msg of messages">{{msg.name}}</li>
              </ul>
            `,
  providers: [MessageService],
})
export class MessageListComponent implements OnInit{
  private messages: Message[];
  constructor(private _messageService: MessageService){}
  getMessage(){
    this._messageService.getMessage().then((message: Message[]) => this.messages = message);
  }
  ngOnInit():any{
     this.getMessage();
  }
}
