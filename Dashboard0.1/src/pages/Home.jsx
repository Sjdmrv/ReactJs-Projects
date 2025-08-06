import React from 'react'
import { Typography, Card } from 'antd'

const { Title, Paragraph } = Typography


export default function Home() {
  return (
    <Card>
      <Title level={2}>Welcome to the Dashboard</Title>
      <Paragraph>
        This is a simple React dashboard built with Ant Design and React Router.
      </Paragraph>
      <Paragraph>
        Use the sidebar to view and manage posts.
      </Paragraph>
    </Card>
  )
}