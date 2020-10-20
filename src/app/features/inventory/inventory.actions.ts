import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
    LOAD_DATA: '[Inventory] Load Data',
    LOAD_DATA_FINISHED: '[Inventory] Load Data Finished',
};

export const LoadData = createAction(
    ActionTypes.LOAD_DATA
);

export const LoadDataFinished = createAction(
    ActionTypes.LOAD_DATA_FINISHED,
    props<{ items: string }>()
);
