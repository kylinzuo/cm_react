import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import specialStyle from './special.component.less'

class SpecialComponent extends PureComponent {
  render () {
    return (
      <div>SpecialComponent</div>
    )
  }
}

SpecialComponent.propTypes = {
}

function select (state) {
  return {
    kylin: state.kylin
  }
}

export default connect(select)(SpecialComponent)
