// src/App.js
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { id: Date.now(), ...post }]);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 5, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Simple Blog Platform
        </Typography>
        <PostForm onSubmit={addPost} />
        <PostList posts={posts} />
      </Box>
    </Container>
  );
};

export default App;
