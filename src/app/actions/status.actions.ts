import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Todo] Add a new task',
  props<{ description: string, isCompleted: boolean }>()
);
export const check = createAction(
  '[Todo] Add a new task',
  props<{ index: number }>()
);
export const remove = createAction(
  '[Todo] Add a new task',
  props<{ index: number }>() );
