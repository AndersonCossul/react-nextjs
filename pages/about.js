import Layout from '../components/layout/master'

const about = (props) => (
  <Layout metas={props.metas}>
    <p>This is the about page</p>
  </Layout>
)

about.getInitialProps = () => {
  return {
    metas: {
      title: 'About US',
      description: 'We are the future.'
    }
  }
}

export default about