import { useContext } from 'react';
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';
import { Context } from '../context';

const PostDetail = () => {
  const context = useContext(Context);
  const { postId } = useParams();

  const comments = context.comments.filter((c) => c.postId === +postId);
  const post = context.posts.find((p) => p.id === +postId);

  if (comments.length === 0 || !post) {
    return <Spinner />;
  }

  return (
    <div className='d-flex flex-md-row flex-column post-detail justify-content-center'>
      <div className='post sticky-top' key={post.id}>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-text'>{post.body}</p>
        </div>
      </div>
      <div className='comments'>
        {comments.map((c) => (
          <div className='comment' key={c.id}>
            <div className='post-body'>
              <div>
                <h6 className='card-title'>{c.name}</h6>
                <p className='card-text font-monospace text-muted'>{c.email}</p>
              </div>
              <p className='post-text'>{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
