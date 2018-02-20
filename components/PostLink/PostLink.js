import { Link } from '../../routes'
import styled from 'styled-components'

const postLink = (props) => (
  <ListItem>
    <Link route="post" params={{ id: props.id }} passHref >
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