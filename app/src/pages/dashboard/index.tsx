import { Col, Result, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import CustomizedCard from "../../components/Card";

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
    loading: false,
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

  if (posts.error)
    return (
      <Result
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        status="error"
        title={posts.error}
      />
    );

  return (
    <div>
      <Title>Dashboard page</Title>

      <Row gutter={16}>
        {posts.data.map((post) => (
          <Col span={8}>
            <CustomizedCard
              key={post.title}
              loading={posts.loading}
              title={post.title}
              description={post.content}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
