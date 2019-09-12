import { createReducer, on, State } from '@ngrx/store';
import { add, check, remove } from '../actions/status.actions';


export interface TodoItem {
  taskDescription: string;
  taskCompleted: boolean;
}

export interface TodoItemState {
  todoList: TodoItem[];
}

const initialTodoListState: TodoItemState = {
  todoList: []
};

export const todoListReducer = createReducer(
  initialTodoListState,
  on( add, (state: TodoItemState, action ) => ({
    ...state,
    todoList: [
      ...state.todoList,
      { taskDescription: action.description, taskCompleted: action.isCompleted }
    ]
  })),
  on( check, ( state: TodoItemState, action ) => {
   const newState = {...state};
   newState.todoList[action.index].taskCompleted = !newState.todoList[action.index].taskCompleted;
   return newState;
  }),
  on ( remove, ( state: TodoItemState, action ) => ({...state, todoList: [ ...state.todoList.splice(action.index, 1) ] }) )
);

