import React from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
    return (
        <div className="login">
            <h1 className="brand__name">CHATIFY</h1>
            <h1 className="tagline">Think Less, Chat More.</h1>
            <hr 
                style={{
                    color: "white",
                    width: "55px"
                }}
            />
            {/* Img */}
            <h1 className="login__text">MEMBER LOGIN</h1>
            <Form>
                <Form.Group controlId="formGroupUsername">
                    <Form.Control type="text" placeholder="User Name" className="username__input"/>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" className="password__input" placeholder="Password" />
                </Form.Group>
                <Button type="submit" className="login__button">
    LOGIN
  </Button>
            </Form>


        </div>
    )
}

export default Login
