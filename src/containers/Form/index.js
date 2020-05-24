import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { addMessage } from 'src/utils';
import { changeTextValue } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: () => {
    const action = addMessage();

    dispatch(action);
  },
  handleChange: () => {
    const action = changeTextValue();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
