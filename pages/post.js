import Layout from '../components/layout/master'
import Post from '../components/Post/Post'
import fetch from 'isomorphic-unfetch'

const post = (props) => (
  <Layout metas={props.metas}>
    <Post post={props.post} />
  </Layout>
)

post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  const post = {
    ...show,
    summary: show.summary.replace(/<[/]?p>/g, ''),
    image: show.image.medium
  }

  return {
    post,
    metas: {
      title: post.name,
      description: post.summary
    }
  }
}

export default post