import { connect } from 'react-redux';

import Message from 'src/components/Message';

const mapStateToProps = (state) => ({
  username: state.username,
  text: state.text,
});

// pour gagner du temps si on a pas de branchements en écriture à faire on peut mettre un objet vide
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
