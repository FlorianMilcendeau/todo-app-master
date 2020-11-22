import { connect } from 'react-redux';
import { filteredTodoSelector } from '../todosSelectors';
import { toggleTodoAction, deleteTodoAction } from '../todosActions';

import TodoList from '../../components/TodoList';

const mapStateToProps = (state) => ({
  todos: filteredTodoSelector(state),
});

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  onDelete: (todo) => dispatch(deleteTodoAction(todo)),
});

const TodoListStore = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListStore;
