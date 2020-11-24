if (localStorage.getItem('todos') === null) {
  localStorage.setItem('todos', []);
}

const localStore = localStorage.getItem('todos');

const storage = localStore.length > 0 ? JSON.parse(localStore) : localStore;

const lastIndex = storage.length;

let id = storage.length > 0 ? storage[lastIndex - 1].id : 0;

const initialState = storage;

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';
export const DELETE_COMPLETED_TODO_ACTION = 'DELETE_COMPLETED_TODO_ACTION';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION: {
      const newState = [
        ...state,
        { id: ++id, ...action.payload, completed: false },
      ];

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState;
    }
    case UPDATE_TODO_ACTION: {
      const updateState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }

        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updateState));

      return updateState;
    }
    case DELETE_TODO_ACTION: {
      const newState = state.filter((todo) => todo.id !== action.payload);

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState;
    }

    case DELETE_COMPLETED_TODO_ACTION: {
      const newState = state.filter((todo) => todo.completed !== true);
      localStorage.setItem('todos', JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
};
