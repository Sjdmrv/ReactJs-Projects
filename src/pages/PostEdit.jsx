import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Input, Button, message, Spin, Card } from 'antd'
import axios from 'axios'

export default function PostEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost({
        title: res.data.title,
        body: res.data.body
      })
    } catch (error) {
      message.error('Something is wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (values) => {
    message.success('Changes saved')
    navigate(`/posts/${id}`)
  }

  return (
    <Card title={`Edit Post #${id}`}>
      {loading ? (
        <Spin />
      ) : post ? (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={post}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Title is required' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: 'Body is required' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      ) : null}
    </Card>
  )
}


