import Link from 'next/link'
import styled from 'styled-components'

const postLink = (props) => (
  <ListItem>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <StyledLink>{props.name}</StyledLink>
    </Link>
  </ListItem>
)

const ListItem = styled.li`
  list-style: none;
  margin: 5px 0;
`

const StyledLink = styled.a`
  font-family: "Arial";
  text-decoration: none;
  color: blue;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

export default postLink