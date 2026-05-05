import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

const { Title, Text, Link } = Typography

function Login() {
    const onFinish = (values) => {
        console.log('Login values:', values)
    }

    return (
        <>
            {/* Responsive styles */}
            <style>{`
        .login-wrapper {
          display: flex;
          height: 100vh;
          flex-direction: row;
        }
        .login-left {
          flex: 1;
          background: linear-gradient(135deg, #1677ff 0%, #0958d9 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px;
          color: white;
        }
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: #fff;
        }
        .feature-item {
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 12px 18px;
          margin-bottom: 12px;
          font-size: 14px;
          color: white;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .login-wrapper {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
          .login-left {
            padding: 40px 24px;
            flex: none;
          }
          .login-right {
            flex: none;
            padding: 32px 24px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .login-left {
            padding: 32px 16px;
          }
          .login-right {
            padding: 24px 16px;
          }
          .login-form-wrap {
            width: 100% !important;
          }
        }
      `}</style>

            <div className="login-wrapper">

                {/* Left Side — Brand Panel */}
                <div className="login-left">
                    <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                    <Title style={{ color: 'white', margin: 0, textAlign: 'center' }} level={2}>
                        MyApp
                    </Title>
                    <Text style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 15,
                        marginTop: 12,
                        textAlign: 'center',
                        maxWidth: 320
                    }}>
                        Your professional workspace — manage everything in one place.
                    </Text>

                    <div style={{ marginTop: 32, width: '100%', maxWidth: 320 }}>
                        {[
                            '✅ Secure and encrypted login',
                            '✅ Real-time dashboard updates',
                            '✅ Collaborate with your team',
                        ].map((item, i) => (
                            <div key={i} className="feature-item">{item}</