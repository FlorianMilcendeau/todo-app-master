export const todosSelectors = ({ todos }) => todos;

export const filteredTodoSelector = ({ todos, filter }) => {
  if (todos.length > 0) {
    if (filter === null) {
      return todos;
    }

    return todos.filter((todo) => todo.completed === filter);
  }

  return todos;
};
