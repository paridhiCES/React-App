import { connect } from 'react-redux'
import Table from '../components/Table'
import { bindActionCreators } from 'redux'
import { getData } from '../actions/TableAction'

const mapStateToProps = (state) => {
  console.log(state.tableReducer.details)
  return {
    tableData: state.tableReducer.details,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ getData }, dispatch)
  }
}

const TableData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
export default TableData
