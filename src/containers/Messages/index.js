// connect "branche" le composant de prez au state enfermé dans le store
import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

// pour gagner du temps si on a pas de branchements en écriture à faire on peut mettre un objet vide
const mapDispatchToProps = {};

// connect prend un comopsant en entrée et retourne le composant enrichi de props
// c'est un HOC = Hight Order Component
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
