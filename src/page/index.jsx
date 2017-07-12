import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import FastClick from 'fastclick'

FastClick.attach(document.body)

class App extends PureComponent {
  render () {
    return (
      <div style={{ height: '100%' }}>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

App.propTypes = {
}

function select (state) {
  return {
    kylin: state.kylin
  }
}

export default connect(select)(App)
