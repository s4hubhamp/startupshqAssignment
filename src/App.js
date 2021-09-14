import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts';
import { Context } from './context/index';

function App() {
  const context = useContext(Context);

  useEffect(() => {
    axios
      .all([
        axios.get(`https://jsonplaceholder.typicode.com/posts`),
        axios.get(`https://jsonplaceholder.typicode.com/comments`),
      ])
      .then(
        axios.spread(({ data: posts }, { data: comments }) => {
          context.setPosts(posts);
          context.setComments(comments);
        })
      );
  }, []);

  return (
    <React.Fragment>
      <nav className='navbar navbar-light bg-light sticky-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            My Posts
          </Link>
        </div>
      </nav>
      <div className='container'>
        <Switch>
          <Route path='/' component={Posts} exact />
          <Route path='/posts/:postId' component={PostDetail} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
