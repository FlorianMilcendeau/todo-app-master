import { connect } from 'react-redux';
import { filteredTodoSelector, filterSelector } from '../todosSelectors';
import {
  toggleTodoAction,
  deleteTodoAction,
  deleteAllTodo,
} from '../todosActions';

import TodoList from '../../components/TodoList';

const mapStateToProps = (state) => ({
  todos: filteredTodoSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  onDelete: (todo) => dispatch(deleteTodoAction(todo)),
  onDeleteAll: () => dispatch(deleteAllTodo()),
});

const TodoListStore = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListStore;
