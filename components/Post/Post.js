import styled from 'styled-components'

export default (props) => (
  <section>
    <Title>{props.post.name}</Title>
    <Description>{props.post.summary}</Description>
    <img src={props.post.image} />
  </section>
)

const Title = styled.h1`
  font-family: "Arial";
  font-size: 30px;
`

const Description = styled.p`
  font-family: "Arial";
  font-size: 16px;
  color: #585858;
`