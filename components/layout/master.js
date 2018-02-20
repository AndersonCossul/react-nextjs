import NProgress from 'nprogress'
import Router from 'next/router'
import Nprogress from 'nprogress';
import Head from './partials/Head'
import Header from './partials/Header'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const layout = (props) => (
  <div style={layoutStyle}>
    <Head metas={props.metas} />
    <Header />
    {props.children}
    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
  </div>
)

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default layout