import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleOpen } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => {
    const action = toggleOpen();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
