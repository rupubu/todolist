import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoItemState, todoListReducer } from './todolist.reducers';


export interface GlobalState {
  todoList: TodoItemState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  todoList: todoListReducer
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
