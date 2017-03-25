import { connect } from 'react-redux'
import Table from '../components/Table'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/UserAction'

const mapStateToProps = (state) => {
  console.log('state Tabledata', state)
  return {
    tableData: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

const TableData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
export default TableData
