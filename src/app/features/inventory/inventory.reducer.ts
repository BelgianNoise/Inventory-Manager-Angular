import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './inventory.actions';
import { getInitalState, InventoryState } from './inventory.state';

const inventoryReduce = createReducer(
  getInitalState(),
  on(
    actions.LoadDataFinished,
    (state, { items }) => ({
      ...state, items
    }),
  ),
);

export function reducer(state: InventoryState, action: Action): any {
  return inventoryReduce(state, action);
}
