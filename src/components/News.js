import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        this is a news component
        <Newsitem/>
      </div>
    )
  }
}

export default News
