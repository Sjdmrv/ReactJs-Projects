import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Spin, message } from 'antd'
import axios from 'axios'

export default function PostDetails() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPost();
  }, [id])

  const fetchPost = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(res.data);
    } catch (error) {
      message.error('SomeThing is Wrong')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Spin />

  if (!post) return null

  return (
    <Card title={`Post Number: ${post.id}`} >
      <p><strong>Title: </strong> {post.title}</p>
      <p><strong>Body: </strong> {post.body}</p>
    </Card>
  )
}

