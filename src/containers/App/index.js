import { connect } from 'react-redux';

import App from 'src/components/App';
import { wsConnect } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    dispatch(wsConnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
