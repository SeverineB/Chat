import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  message: state.message,
});

// pour gagner du temps si on a pas de branchements en écriture à faire on peut mettre un objet vide
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
