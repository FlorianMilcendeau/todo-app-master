import { connect } from 'react-redux';

import FilterTodo from '../../components/FilterTodo';
import { filterAction } from '../filterAction';
import { filterSelector } from '../filterSelector';

export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';

const mapStateToProps = (state) => ({
  filter: filterSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch(filterAction(value)),
});

const FilterTodoStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTodo);

export default FilterTodoStore;
