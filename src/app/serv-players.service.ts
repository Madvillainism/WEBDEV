import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServPlayersService {
  constructor() {}

  showMsg(msg: string) {
    alert(msg);
  }
}
