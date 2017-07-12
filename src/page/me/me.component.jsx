import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import meStyle from './me.component.less'

class MeComponent extends PureComponent {
  render () {
    return (
      <div>MeComponent</div>
    )
  }
}

MeComponent.propTypes = {
}

function select (state) {
  return {
    kylin: state.kylin
  }
}

export default connect(select)(MeComponent)
