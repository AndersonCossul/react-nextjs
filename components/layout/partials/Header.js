import { Link } from '../../../routes'
import styled from 'styled-components'

const linkStyle = {
  marginRight: 15
}

class Header extends React.Component {
  state = {
    activeLink: ''
  }

  componentDidMount() {
    this.setState({
      activeLink: window.location.pathname
    })
  }

  render() {
    return (
      <StyledHeader>
        <nav>
          <StyledList>
            <StyledListItem>
              <Link route="/" passHref >
                <StyledLink
                  style={linkStyle}
                  active={this.state.activeLink === '/'}>Shows</StyledLink>
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link route="/about" passHref >
                <StyledLink
                  style={linkStyle}
                  active={this.state.activeLink === '/about'}>About</StyledLink>
              </Link>
            </StyledListItem>
          </StyledList>
        </nav>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  padding: 10px;
  border-bottom: 1px solid #eee;
`

const StyledList = styled.ul`
  list-style: none;
  width: 100%;
  text-align: center;
`

const StyledListItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
`

const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Arial";
  font-size: 16px;
  color: black;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: ${props => props.active ? '0' : '51%'};
    right: ${props => props.active ? '0' : '50%'};
    background: black;
    height: 2px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover {
    &:after {
      left: 0;
      right: 0;
    }
  }
`

export default Header