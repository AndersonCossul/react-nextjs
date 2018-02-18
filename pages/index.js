import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Header from '../components/Header'

class IndexPage extends Component {
  // static aync getInitialProps(context) {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({appName: 'Super App'})
      }, 1000)
    })
    return promise
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    )
  }
}

export default IndexPage