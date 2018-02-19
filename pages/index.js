import Layout from '../components/layout/master'
import PostLink from '../components/PostLink/PostLink'

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="SSR for the win" />
    </ul>
  </Layout>
)

export default Index