import Link from 'next/link'

const postLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
)

export default postLink