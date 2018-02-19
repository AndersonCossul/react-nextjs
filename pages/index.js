import Layout from '../components/layout/master'
import PostLink from '../components/PostLink/PostLink'

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-next-js" title="Hello Next.js" />
      <PostLink id="learn-next-js" title="Learn Next.js is awesome" />
      <PostLink id="ssr-next-js" title="SSR for the win" />
    </ul>
  </Layout>
)

export default Index