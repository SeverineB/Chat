import { connect } from 'react-redux';

import Field from 'src/components/Field';
import { change } from 'src/actions';

// on récupère props passées au container avec ownProps
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.name);
  // pour accéder à propriété d'un objet on écrit
  // object.propertyName
  // Mais on peut aussi écrire object['propertyName']
  // avantage : nom de propriété est en chaîne de caractère
  // donc peut être rangé au préalable dans une variable
  // const voiture = { color: 'rouge' };
  // voiture.color // -> "rouge"
  // voiture['color'] -> "rouge"
  // const propName = 'color';
  // voiture[propName]
  return ({
    value: state[ownProps.name],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (newValue) => {
    console.log('je veux changer la valeur de champ');
    console.log(dispatch, newValue, ownProps.name);
    const action = change(ownProps.name, newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
