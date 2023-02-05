import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface IProps {
  loading: boolean;
  title: string;
  description: string;
}
const CustomizedCard = ({ title, description, loading }: IProps) => (
  <Card
    hoverable
    loading={loading}
    style={{ width: 240 }}
    cover={
      loading ? undefined : (
        <img alt="example" src="https://source.unsplash.com/random" />
      )
    }
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CustomizedCard;
