import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css"
import {auth,provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

function Login() {

    const [{}, dispatch]= useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            dispatch({
                type:actionTypes.SET_SESSION,
                uid:result.user.uid,
                displayName:result.user.displayName,
                photoURL:result.user.photoURL
            })
        })
        .catch((err)=>alert(err.message));
        
    };
    return (
        <div className="login">
            <h1 className="brand__name">CHATIFY</h1>
            <h1 className="tagline">Think Less, Chat More.</h1>
            <hr 
                style={{
                    color: "white",
                    width: "55px",
                    marginBottom: "80px"
                }}
            />
            <Button type="submit" className="login__button" onClick={signIn}> Sign In using Google </Button>
            

            
        </div>
    )
}

export default Login
