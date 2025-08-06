import React, { useEffect, useState } from 'react'
import { Table, Button, Space, message, Popconfirm } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
    } catch (error) {
      message.error('SomeThing is Wrong')
    } finally {
      setLoading(false)
    }
  }

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
    message.success('Post Deleted')
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      key: 'actions',
      width: 250,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => navigate(`/posts/${record.id}`)}>
            View Post
          </Button>
          <Button type="link" onClick={() => navigate(`/posts/${record.id}/edit`)}>
            Edit Post
          </Button>
          {<Button danger type="link" onClick={() => deletePost(record.id)}>
              Delete
            </Button> }
          </Space>
      )
    }
  ]

  return (
    <div>
      <h2>Posts List</h2>
      <Table
        columns={columns}
        dataSource={posts}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  )
}


