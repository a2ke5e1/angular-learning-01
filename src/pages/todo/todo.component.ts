import { Component } from '@angular/core';


type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  private generateId = (): number => Math.round(Math.random() * 1000000);

  todoItems: TodoItem[] = [];


  onSubmit(event: any) {
    event.preventDefault();
    const input = event.target.todovalue;
    if (input.value) {
      this.addTodoItem(input.value);
      input.value = '';
    }

  }

  addTodoItem(text: string) {
    this.todoItems.push({
      id: this.generateId(),
      text,
      done: false,
    });
  }

  removeTodoItem(id: number) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  toggleTodoItem(id: number) {
    this.todoItems = this.todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
  }

}
