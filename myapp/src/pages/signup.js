import React, { useRef, useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { Form, Card, Alert } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link } from 'react-router-dom'
import { doc, setDoc } from '@firebase/firestore'
import { db, analytics } from '../firebase'
import { logEvent } from '@firebase/analytics'

export default function Signup() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, update } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.log(passwordRef.current.value);
            console.log(passwordConfirmRef.current.value);
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            logEvent(analytics, "sign_up");
            // Sign up with auth
            setDoc(doc(db, 'users', emailRef.current.value), { // Add to user database, email as document id
                displayName: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
                email: emailRef.current.value,
                photoURL: "",
                bio: "",
            });
            const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`
            await update(name, emailRef.current.value, "", "");
            setLoading(false);
            history.push('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to create an account: ' + error);
        }
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <TextField required inputRef={firstNameRef} className="mb-3" margin="normal" fullWidth id="fName" label="Your First Name" variant="filled" type="text" />
                                <TextField required inputRef={lastNameRef} className="mb-3" margin="normal" fullWidth id="lName" label="Your Last Name" variant="filled" type="text" />
                                <TextField required inputRef={emailRef} className="mb-3" margin="normal" fullWidth id="email" label="Your Email Address" variant="filled" type="email" />
                                <TextField required inputRef={passwordRef} className="mt-3 mb-3" margin="normal" fullWidth type="password" id="password" label="Password" variant="filled" helperText="Enter a strong password at least 6 characters in length." />
                                <TextField required inputRef={passwordConfirmRef} className="mt-3 mb-3" margin="normal" fullWidth type="password" id="confirmPassword" label="Confirm Password" variant="filled" />
                                <Button disabled={loading} className="w-100 mt-4" variant="contained" color="primary" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <p>Already signed up? <Link to="/login" >Log in.</Link>
                        </p>
                    </div>
                </div>
            </Container>

        </>
    )
}

