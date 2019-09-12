import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GlobalState } from './reducers';
import { Observable } from 'rxjs';
import { getTodoList } from './selectors/todos.selectors';
import { add, check, remove } from './actions/status.actions';
import { TodoItem } from './reducers/todolist.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todosValues$: Observable<Array<TodoItem>>;

  constructor( private store: Store<GlobalState> ) {
    this.todosValues$ = store.pipe( select( getTodoList ) );
  }

  addTodo( desc: string, checked: boolean ) {

    this.store.dispatch( add({ description: desc, isCompleted: checked } ) );
  }

  checkTodo( index: number ) {
    this.store.dispatch( check( { index } ) );
  }

  remove( index: number ) {
    this.store.dispatch( remove( { index } ) );
  }
}
