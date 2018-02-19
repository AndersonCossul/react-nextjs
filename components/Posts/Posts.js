import PostLink from '../PostLink/PostLink'

export default (props) => (
  <ul>
    {
      props.shows.map(({ show }) => (
        <PostLink
          key={show.id}
          id={show.id}
          name={show.name} />
      ))
    }
    <style jsx>{`
      ul {
        padding: 0;
      }
    `}</style>
  </ul>
)
