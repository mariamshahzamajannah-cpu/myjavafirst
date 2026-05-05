import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

const { Title, Text, Link } = Typography

function Login() {
    const onFinish = (values) => {
        console.log('Login values:', values)
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>

            {/* Left Side — Image / Brand Panel */}
            <div style={{
                flex: 1,
                background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                color: 'white'
            }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>⚡</div>
                <Title style={{ color: 'white', margin: 0 }} level={1}>MyApp</Title>
                <Text style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, marginTop: 16, textAlign: 'center' }}>
                    Your professional workspace — manage everything in one place.
                </Text>

                {/* Feature bullets */}
                <div style={{ marginTop: 48, width: '100%', maxWidth: 320 }}>
                    {[
                        '✅ Secure and encrypted login',
                        '✅ Real-time dashboard updates',
                        '✅ Collaborate with your team',
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.12)',
                            borderRadius: 10,
                            padding: '12px 18px',
                            marginBottom: 12,
                            fontSize: 14,
                            color: 'white'
                        }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side — Login Form */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                background: '#fff'
            }}>
                <div style={{ width: '100%', maxWidth: 380 }}>

                    {/* Header */}
                    <Title level={2} style={{ marginBottom: 4 }}>Welcome back</Title>
                    <Text type="secondary" style={{ fontSize: 15 }}>
                        Sign in to your account to continue
                    </Text>

                    <Divider />

                    {/* Form */}
                    <Form
                        name="login"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        size="large"
                    >

                        {/* Email / Username */}
                        <Form.Item
                            label="Email or Username"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email or username' }]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: '#bbb' }} />}
                                placeholder="you@example.com"
                            />
                        </Form.Item>

                        {/* Password */}
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

                        {/* Remember me + Forgot password */}
                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link href="#">Forgot password?</Link>
                            </div>
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block size="large">
                                Sign In
                            </Button>
                        </Form.Item>

                        {/* Sign up link */}
                        <div style={{ textAlign: 'center' }}>
                            <Text type="secondary">Don't have an account? </Text>
                            <Link href="#">Sign up for free</Link>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Login