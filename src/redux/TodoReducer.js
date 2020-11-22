let id = 2;

const initialState = [
  {
    id: 1,
    title: 'begin the tutorial redux',
    completed: true,
  },
  {
    id: 2,
    title: 'Finish the tutorial redux',
    completed: false,
  },
];

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, ...action.payload, completed: false }];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }

        return todo;
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
