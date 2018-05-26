import { connect } from 'react-redux';
import {addUser} from './redux/actions.js'
import BasicRouter from './BasicRouter'

const mapStateToProps = state => {
  return {
    toto: 'la tchoin'
  };
}

const mapDispatchToProps = dispatch => ({
  onClick: (uname, password) => dispatch(addUser(uname, password))
});

const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicRouter);


export default UserInfo;
