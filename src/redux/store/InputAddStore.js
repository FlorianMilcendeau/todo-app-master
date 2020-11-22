import { connect } from 'react-redux';

import { addTodoAction } from '../todosActions';
import Input from '../../components/Input';

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  onAdd: (todo) => dispatch(addTodoAction(todo)),
});

const InputAddStore = connect(null, mapDispatchToProps)(Input);

export default InputAddStore;
