import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
    }
  }
}
