import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // definisco una variabile messages, array di stringhe vuoto
  messages: string[] = [];

  // definisco il metodo per inserire una variabile message nell'array messages
  add(message: string) {
    this.messages.push(message);
  }

  // definisco il metodo per ripulire l'array messages
  clear() {
    this.messages = [];
  }

  constructor() { }
}
