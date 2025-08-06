import React from "react"
import {Typography, Layout, Flex} from "antd"

const {Title} = Typography
const {Header: AntHeader} = Layout

export default function Header() {
  return (
    <AntHeader style={{
      background: '#fff',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <Title level={3} style={{ margin: 0 }}> Dashboard</Title>
    </AntHeader>
  );
}
