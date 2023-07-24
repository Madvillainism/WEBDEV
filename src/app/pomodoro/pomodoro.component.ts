import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {
  minutes: number = 25;
  seconds: number = 0;
  todos: string[] = [];
  newTodo: string = '';

  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes === 0) {
          this.stopTimer();
          return;
        }
        this.minutes--;
        this.seconds = 59;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.minutes = 25;
    this.seconds = 0;
    clearInterval(this.interval);
  }

  addTodo() {
    if (this.newTodo !== '') {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
}
