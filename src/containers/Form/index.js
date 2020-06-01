import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { sendMessage, changeText } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  send: () => {
    console.log('dans addMessages je dispatch mon action');
    const action = sendMessage();
    // avec dispatch on appelle le reducer pour traduire notre intention d'action
    dispatch(action);
  },
  // prop accessible dans le composant et qui contiendra
  // une clé: fonction
  changeText: (value) => {
    // j'exécute mon action creator changeText
    // je vais passer la valeur à l'action creator pour qu'il la range dans l'objet action, ainsi elle arrivera au reducer
    const action = changeText(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
