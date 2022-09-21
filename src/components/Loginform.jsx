import React from 'react';
import { Button, Checkbox, Form, Input ,Row,Col} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const Loginform =()=>{
    return (
        <>
        <Row>
            <Col span={8} offset = {8}>
       <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
            Or <a href="/">register now!</a>
      </Form.Item>
    </Form>
    </Col>
</Row>
        </>
    )

}
export default Loginform;
