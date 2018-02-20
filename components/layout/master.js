import Head from './partials/Head'
import Header from './partials/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const layout = (props) => (
  <div style={layoutStyle}>
    <Head metas={props.metas} />
    <Header />
    {props.children}
  </div>
)

export default layout