import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import User from '../../components/User'

const authIndexPage = (props) => (
  <div>
    <Header/>
    <h1>The Auth Page - {props.appName}</h1>
    <p>Go back <Link href="/"><a>Home</a></Link></p>
    <User name="Anderson Cossul" age="19" />
  </div>
)

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({appName: 'Super App (Auth)'})
    }, 1000)
  })
  return promise
}

export default authIndexPage