import Layout from '../components/layout/master'
import Post from '../components/Post/Post'
import fetch from 'isomorphic-unfetch'

const post = (props) => (
  <Layout metas={props.metas}>
    <Post post={props.post} />
  </Layout>
)

post.getInitialProps = async function ({ query }) {
  const id = query.id
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  // post will be a formatted version of the show
  const post = {
    ...show,
    summary: show.summary.replace(/<[/]?p>/g, ''),
    image: show.image.medium
  }

  return {
    post: post,
    metas: {
      title: post.name,
      description: post.summary
    }
  }
}

export default post