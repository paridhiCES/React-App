import { connect } from 'react-redux'
import AddForm from '../components/AddForm'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/UserAction'

const mapStateToProps = (state) => {
  return {
  //  users: state.details.details,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

const FormDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)
export default FormDetails
