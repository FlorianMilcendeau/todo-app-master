import { connect } from 'react-redux';
import { filteredTodoSelector } from '../todosSelectors';
import { toggleTodoAction, deleteTodoAction } from '../todosActions';

import TodoList from '../../components/TodoList';

const mapStateToProps = (state) => ({
  todos: filteredTodoSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  onDelete: (todo) => dispatch(deleteTodoAction(todo)),
});

const TodoListStore = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListStore;
