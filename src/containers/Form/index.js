import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { addMessageInList } from 'src/utils';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    const action = addMessageInList();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
