import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import topicHeaderStyle from './topic-header.component.less'

class TopicHeaderComponent extends PureComponent {
  static defaultProps = {
    topic: '名家专栏',
    rightNav: {
      text: '查看全部'
    }
  }
  render () {
    return (
      <header className={topicHeaderStyle.topic}>
        <span className={topicHeaderStyle.title}> {this.props.topic} </span>
        {
          (() => {
            if (this.props.rightNav) {
              return <a href='javascript: void 0'>{this.props.rightNav.text}<i className={'iconfont icon-next'} /></a>
            }
          })()
        }
      </header>
    )
  }
}

TopicHeaderComponent.propTypes = {
}

function select (state) {
  return {
    kylin: state.kylin
  }
}

export default connect(select)(TopicHeaderComponent)
