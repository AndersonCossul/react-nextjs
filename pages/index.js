import React from 'react'
import Layout from '../components/layout/master'
import styled from 'styled-components'
import Posts from '../components/Posts/Posts'
import fetch from 'isomorphic-unfetch'

const index = (props) => (
  <Layout metas={props.metas}>
    <Title>Batman TV Shows</Title>
    <Posts shows={props.shows} />
  </Layout>
)

index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data,
    metas: {
      title: 'Batman Shows',
      description: 'Server Side Rendering dynamic list of Batman Shows!'
    }
  }
}

const Title = styled.h1`
  font-family: "Arial";
`

export default index