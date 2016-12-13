import {Injectable} from '@angular/core';
import {MESSAGES} from './message-data';

@Injectable()
export class MessageService{

    getMessage(){
      return Promise.resolve(MESSAGES);
    }
}
