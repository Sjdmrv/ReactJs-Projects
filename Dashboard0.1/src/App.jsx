import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/general/Header'
import Sidebar from './components/general/Sidebar'
import AppRoutes from './router/AppRoutes'

const {Content, Sider} = Layout


function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200}>
          <Sidebar />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ margin: '24px', background: '#fff', padding: '24px' }}>
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}

export default App
