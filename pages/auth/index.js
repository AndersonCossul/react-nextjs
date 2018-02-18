import React from 'react'
import Link from 'next/link'

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <p>Go back <Link href="/">Home</Link></p>
  </div>
)

export default authIndexPage