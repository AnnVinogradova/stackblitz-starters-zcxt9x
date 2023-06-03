import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  newTask: string = '';
  editingTask: number | null = null;

  addTask() {
    if (this.newTask.trim() !== '') {
      const task: Task = {
        title: this.newTask,
        completed: false,
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  deleteCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.completed);
  }

  sortTasks() {
    this.tasks.sort((a, b) => a.title.localeCompare(b.title));
  }


  originalTitle: string = '';
  
  
  editTask(index: number) {
    this.editingTask = index;
    this.originalTitle = this.tasks[index].title;
  }
  
  saveTask() {
    if (this.editingTask !== null) {
      this.editingTask = null;
      this.originalTitle = '';
    }
  }
  
  cancelEdit() {
    if (this.editingTask !== null) {
      this.tasks[this.editingTask].title = this.originalTitle;
      this.editingTask = null;
      this.originalTitle = '';
    }
  }
  
  
  
}



