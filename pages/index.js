import Layout from '../components/layout/master'
import Posts from '../components/Posts/Posts'
import fetch from 'isomorphic-unfetch'

const index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <Posts shows={props.shows} />
    <style jsx>{
      h1 {
        font-family: "Arial";
      }
    }</style>
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