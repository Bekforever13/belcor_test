import { useActions } from '@/hooks/useActions'
import { Button, Checkbox, Form, Input, Spin, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { FieldType } from './index.types'
import { useEffect, useState } from 'react'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const Login = () => {
  const { setAuth, setUser } = useActions()
  const [isMounted, setIsMounted] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values: FieldType) => {
    console.log('Success:', values)
    setAuth(true)
    setUser({ username: values.username!, password: values.password! })
    localStorage.setItem('belcor_username', values.username!)
    localStorage.setItem('belcor_password', values.password!)
    message.success(`Welcome ${values.username}`)
    navigate('/')
  }

  useEffect(() => {
    const username = localStorage.getItem('belcor_username')
    const password = localStorage.getItem('belcor_password')
    if (username && password) {
      setAuth(true)
      setUser({ username: username, password: password })
      navigate('/')
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) {
    return <Spin spinning />
  }

  return (
    <div className="flex flex-col gap-y-10 items-center justify-center w-full h-screen">
      <h1 className="text-center">Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        Don't have account?{' '}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
    </div>
  )
}

export { Login }
