import React, { useRef, useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { Form, Card, Alert } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link } from 'react-router-dom'
import { analytics } from '../firebase'
import { logEvent } from '@firebase/analytics'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            logEvent(analytics, "login");
            // console.log('User logged in');
            setLoading(false)
            history.push('/');
        } catch (error) {
            // console.log(error);
            setError('Failed to log in: ' + error);
        }
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <TextField required inputRef={emailRef} className="mb-3" margin="normal" fullWidth type="email" id="email" label="Your Email Address" variant="filled" />
                                <TextField required inputRef={passwordRef} className="mt-3 mb-3" margin="normal" fullWidth type="password" id="password" label="Password" variant="filled" />
                                <Button disabled={loading} className="w-100 mt-4" variant="contained" color="secondary" type="submit" >Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <p>Don't have an account? <Link to="/signup" >Sign up.</Link>
                        </p>
                    </div>
                </div>
            </Container>

        </>
    )
}
