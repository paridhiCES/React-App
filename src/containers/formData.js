import { connect } from 'react-redux'
import AddForm from '../components/AddForm'
import { bindActionCreators } from 'redux'
import { setData } from '../actions'

const mapStateToProps = (state) => {
  return {
    details: state.details.details,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({setData}, dispatch)
  }
}

const FormDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)
export default FormDetails
