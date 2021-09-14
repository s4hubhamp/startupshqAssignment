import { createContext, useState } from 'react';

export const Context = createContext({ posts: [], comments: [] });

const ContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const contextValue = {
    posts,
    comments,
    setPosts,
    setComments,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
