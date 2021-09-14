import Spinner from '../components/Spinner';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { Context } from '../context';

const Posts = () => {
  const context = useContext(Context);
  const posts = context.posts;

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/posts/${id}`);
  };

  if (!posts) {
    return <Spinner />;
  }

  return (
    <div className='d-flex flex-row justify-content-between flex-wrap mt-5'>
      {posts.map((p) => (
        <div
          className='card mb-4'
          key={p.id}
          onClick={handleClick.bind(null, p.id)}
        >
          <div className='card-body'>
            <h5 className='card-title'>{p.title}</h5>
            <p className='card-text'>{p.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
