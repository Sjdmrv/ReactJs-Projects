import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  SnippetsOutlined
} from '@ant-design/icons'

export default function Sidebar() {
  const location = useLocation()

  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>
    },
    {
      key: '/posts',
      icon: <SnippetsOutlined />,
      label: <Link to="/posts">Posts</Link>
    }
  ]

  const selectedKey = items
    .map(item => item.key)
    .find(key => location.pathname === key || location.pathname.startsWith(key + '/')) || '/'

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      items={items}
      style={{ height: '100%', borderRight: 0 }}
    />
  )
}
