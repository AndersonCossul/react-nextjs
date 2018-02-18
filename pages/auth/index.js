import React from 'react'
import Link from 'next/link'
import User from '../../components/User'

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <p>Go back <Link href="/">Home</Link></p>
    <User name="Anderson Cossul" age="19" />
  </div>
)

export default authIndexPage