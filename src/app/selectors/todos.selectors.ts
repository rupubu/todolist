import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { TodoItemState } from '../reducers/todolist.reducers';

const getTodoItemState = createFeatureSelector( 'todoList' );

export const getTodoList = createSelector( getTodoItemState, (state: TodoItemState) => state.todoList );
