import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

const { Title, Text, Link } = Typography

function Login() {
    const onFinish = (values) => {
        console.log('Login values:', values)
    }

    const features = [
        'Secure and encrypted login',
        'Real-time dashboard updates',
        'Collaborate with your team',
    ]

    return (
        <>
            <style>{`
        .login-wrapper { display: flex; flex-direction: row; min-height: 100vh; }
        .login-left { flex: 1; background: #1677ff; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px; color: white; }
        .login-right { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; background: #fff; }
        .feature-item { background: rgba(255,255,255,0.15); border-radius: 10px; padding: 12px 18px; margin-bottom: 12px; font-size: 14px; color: white; }
        .login-form-wrap { width: 100%; max-width: 380px; }
        @media (max-width: 768px) {
          .login-wrapper { flex-direction: column; }
          .login-left { padding: 40px 24px; }
          .login-right { padding: 32px 24px; }
        }
        @media (max-width: 480px) {
          .login-left { padding: 32px 16px; }
          .login-right { padding: 24px 16px; }
        }
      `}</style>

            <div className="login-wrapper">

                <div className="login-left">
                    <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                    <Title style={{ color: 'white', margin: 0, textAlign: 'center' }} level={2}>
                        MyApp
                    </Title>
                    <Text style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, marginTop: 12, textAlign: 'center', maxWidth: 320 }}>
                        Your professional workspace — manage everything in one place.
                    </Text>
                    <div style={{ marginTop: 32, width: '100%', maxWidth: 320 }}>
                        {features.map((item, i) => (
                            <div key={i} className="feature-item">{item}</div>
                        ))}
                    </div>
                </div>

                <div className="login-right">
                    <div className="login-form-wrap">
                        <Title level={2} style={{ marginBottom: 4 }}>Welcome back</Title>
                        <Text type="secondary" style={{ fontSize: 15 }}>
                            Sign in to your account to continue
                        </Text>
                        <Divider />
                        <Form name="login" layout="vertical" onFinish={onFinish} autoComplete="off" size="large">

                            <Form.Item
                                label="Email or Username"
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email' }]}
                            >
                                <Input
                                    prefix={<MailOutlined style={{ color: '#bbb' }} />}
                                    placeholder="you@example.com"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#bbb' }} />}
                                    placeholder="Enter your password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <Link href="#">Forgot password?</Link>
                                </div>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block size="large">
                                    Sign In
                                </Button>
                            </Form.Item>

                            <div style={{ textAlign: 'center' }}>
                                <Text type="secondary">Don't have an account? </Text>
                                <Link href="#">Sign up for free</Link>
                            </div>

                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login