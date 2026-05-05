import { useState } from 'react'
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native'

const features = [
    'Secure and encrypted login',
    'Real-time dashboard updates',
    'Collaborate with your team',
]

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please fill in all fields')
            return
        }
        alert('Login successful!')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView style={{ flex: 1 }} bounces={false}>

                {/* Blue Top Panel */}
                <View style={styles.topPanel}>
                    <Text style={styles.logo}>⚡</Text>
                    <Text style={styles.appName}>MyApp</Text>
                    <Text style={styles.tagline}>
                        Your professional workspace — manage everything in one place.
                    </Text>
                    {features.map((item, i) => (
                        <View key={i} style={styles.featureItem}>
                            <Text style={styles.featureText}>✓  {item}</Text>
                        </View>
                    ))}
                </View>

                {/* White Bottom Form Panel */}
                <View style={styles.formPanel}>
                    <Text style={styles.welcomeTitle}>Welcome back</Text>
                    <Text style={styles.welcomeSub}>Sign in to your account to continue</Text>
                    <View style={styles.divider} />

                    {/* Email */}
                    <Text style={styles.label}>Email or Username</Text>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputIcon}>✉</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="you@example.com"
                            placeholderTextColor="#bbb"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password */}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputIcon}>🔒</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#bbb"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.showHide}>{showPassword ? 'Hide' : 'Show'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Remember me + Forgot password */}
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.checkboxRow} onPress={() => setRemember(!remember)}>
                            <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
                                {remember && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.rememberText}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign In Button */}
                    <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>

                    {/* Sign Up */}
                    <View style={styles.signupRow}>
                        <Text style={styles.signupText}>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.signupLink}>Sign up for free</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    topPanel: { backgroundColor: '#1677ff', padding: 40, paddingTop: 60, alignItems: 'center' },
    logo: { fontSize: 48, marginBottom: 8 },
    appName: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
    tagline: { fontSize: 14, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginBottom: 24, lineHeight: 20 },
    featureItem: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: 12, marginBottom: 10, width: '100%' },
    featureText: { color: '#fff', fontSize: 14 },
    formPanel: { backgroundColor: '#fff', padding: 28, flex: 1 },
    welcomeTitle: { fontSize: 24, fontWeight: 'bold', color: '#111', marginBottom: 4 },
    welcomeSub: { fontSize: 14, color: '#888', marginBottom: 16 },
    divider: { borderTopWidth: 1, borderColor: '#eee', marginBottom: 20 },
    label: { fontSize: 13, color: '#444', marginBottom: 6, fontWeight: '500' },
    inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, height: 48 },
    inputIcon: { fontSize: 16, marginRight: 8, color: '#bbb' },
    input: { flex: 1, fontSize: 14, color: '#333' },
    showHide: { fontSize: 13, color: '#1677ff' },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
    checkboxRow: { flexDirection: 'row', alignItems: 'center' },
    checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 4, marginRight: 8, alignItems: 'center', justifyContent: 'center' },
    checkboxChecked: { backgroundColor: '#1677ff', borderColor: '#1677ff' },
    checkmark: { color: '#fff', fontSize: 12 },
    rememberText: { fontSize: 13, color: '#444' },
    forgotText: { fontSize: 13, color: '#1677ff' },
    signInButton: { backgroundColor: '#1677ff', borderRadius: 8, padding: 14, alignItems: 'center', marginBottom: 20 },
    signInText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    signupRow: { flexDirection: 'row', justifyContent: 'center' },
    signupText: { fontSize: 13, color: '#888' },
    signupLink: { fontSize: 13, color: '#1677ff' },
})