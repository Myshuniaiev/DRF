import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomizedCard from "../../components/Card";
import Loader from "../../components/Loader";

interface IState {
  loading: boolean;
  error: string | undefined;
  data: {
    author: number;
    content: string;
    excerpt: string;
    id: number;
    status: string;
    title: string;
  }[];
}
export default function Dashboard() {
  const [posts, setPosts] = useState<IState>({
    loading: true,
    error: undefined,
    data: [
      {
        author: 0,
        content: "",
        excerpt: "",
        id: 0,
        status: "",
        title: "",
      },
      {
        author: 1,
        content: "",
        excerpt: "",
        id: 1,
        status: "",
        title: "",
      },
      {
        author: 2,
        content: "",
        excerpt: "",
        id: 2,
        status: "",
        title: "",
      },
    ],
  });

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/api/";
    setPosts({ ...posts, loading: true });
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts({ ...posts, data, loading: false }))
      .catch((error) => setPosts({ ...posts, error: error.message }));
  }, []);

  if (posts.error) return <Box>Error: {posts.error}</Box>;
  else if (posts.loading) return <Loader />;

  return (
    <Container fixed>
      <Typography variant="h2">Posts</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: "50px 0" }}
      >
        {posts.data.map((post) => (
          <Grid item xs={2} sm={4} md={4} key={post.id}>
            <CustomizedCard
              key={post.title}
              loading={posts.loading}
              title={post.title}
              excerpt={post.excerpt}
              content={post.content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
