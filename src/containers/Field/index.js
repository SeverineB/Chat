import { connect } from 'react-redux';

import Field from 'src/components/Field';
import { change } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.name);
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
    console.log(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
