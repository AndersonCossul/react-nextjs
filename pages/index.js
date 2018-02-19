import Layout from '../components/layout/master'
import PostLink from '../components/PostLink/PostLink'
import fetch from 'isomorphic-unfetch'

const index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {
        props.shows.map(({show}) => (
          <PostLink
            key={show.id}
            id={show.id}
            name={show.name} />
        ))
      }
    </ul>
  </Layout>
)

index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default index