import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import headerStyle from './header.component.less'
// <i className={'iconfont icon-fanhui1'} />
export default class HeaderComponent extends PureComponent {
  constructor (props) {
    super(props)
  }

  static defaultProps = {
    left: 'hello world',
    title: '好人好股',
    right: '专栏详情'
  }

  render () {
    console.log(this.props.left)
    return <div className={headerStyle.header} >
      {
        (() => {
          if (this.props.left) {
            return <a href='javascript: void 0' className={headerStyle.left} onClick={this.goBack}><i className={'iconfont icon-fanhui1'} /></a>
          }
        })()
      }
      {
        (() => {
          if (this.props.title) {
            return <span className={headerStyle.title}>{ this.props.title }</span>
          }
        })()
      }
      {
        (() => {
          if (this.props.right) {
            return <span className={headerStyle.right}>{ this.props.right }</span>
          }
        })()
      }
    </div>
  }

  goBack () {
    console.log('go back')
  }
}

HeaderComponent.propTypes = {
}
