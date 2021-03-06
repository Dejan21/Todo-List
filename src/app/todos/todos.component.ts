import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.module';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form:NgForm){
    if(form.invalid) return alert('Form is invalid')
    console.log('Form Submited');
    console.log(form)

    this.dataService.addTodo(new Todo( form.value.text))

    form.reset()
  }

   toggleCompleted(todo: Todo){
      todo.completed = !todo.completed;
    }

    editTodo(todo: Todo){
      // We need
      // - index of todo
      // - user needs to enter new updated inforamtion

      const index = this.todos?.indexOf(todo)

     //this.dataService.updateTodo()
    }
}
