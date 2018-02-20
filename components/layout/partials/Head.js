import Head from 'next/head'

export default (props) => (
  <Head>
    <title>{props.metas.title || 'Blog'}</title>
    <meta name="description" value={props.metas.description || ''} />
  </Head>
)