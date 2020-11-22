import { UPDATE_FILTER } from './filterReducer';

export const filterAction = (value) => ({
  type: UPDATE_FILTER,
  payload: value,
});
