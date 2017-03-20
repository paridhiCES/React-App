import { connect } from 'react-redux'
import Table from '../components/table'
import { bindActionCreators } from 'redux'
import { getData } from '../actions'

const mapStateToProps = (state) => {
  return {
    tableData: state.details.details[0],
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
