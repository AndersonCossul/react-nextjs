import Link from 'next/link'

const postLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
)

export default postLink