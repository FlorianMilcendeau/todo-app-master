export const todosSelectors = ({ todos }) => todos;

export const filteredTodoSelector = ({ todos, filter }) => {
  console.log(todos);
  if (todos.length > 0) {
    return todos.filter((todo) => filter === null || todo.completed === filter);
  }

  return todos;
};
