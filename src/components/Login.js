import React, { Component } from 'react'
import {Form,Button, FormLabel} from 'react-bootstrap';
import '../App.css';

class Login extends Component {
    render() {
        return (
<div class="login">
    <Form>
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required"/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-dark btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="/forgotPassword" class="pull-right">Forgot Password?</a>
        </div>        
    </Form>
    <p class="text-center"><a href="/notfound">Create an Account</a></p>
</div>
  )
    }


}

export default Login

//https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form
