import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleDownload = this.handleDownload.bind(this)
  }
  handleDownload() {
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>按钮</button>
      </div>
    )
  }
}
