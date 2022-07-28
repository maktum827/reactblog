import React, {Fragment, useEffect  } from 'react'
import { getPosts } from '../actions/postActions'
import { useDispatch , useSelector} from 'react-redux'

const Home = () => {

  const { posts } = useSelector(state => state.posts)

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

  return (
    <div>
      {posts.map(post => (
        <Fragment>
          <p>Title: {post.title}</p>
        <h5>Description: {post.description}</h5>
        </Fragment>
      ))}
    </div>
  )
}

export default Home