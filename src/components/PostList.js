// src/components/PostList.js
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Divider } from '@mui/material';

const PostList = ({ posts }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <div key={post.id}>
            <ListItem disablePadding>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="body2">{post.content}</Typography>
                </CardContent>
              </Card>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default PostList;
