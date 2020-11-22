let id = 1;

const initialState = [
  {
    id: 1,
    title: 'begin the tutoriale redux',
    completed: true,
  },
];

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, ...action.payload, completed: false }];
    default:
      return state;
  }
};
