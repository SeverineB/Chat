import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';
import { isAuthor } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  isAuthor: isAuthor(state.pseudo, ownProps.author),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
