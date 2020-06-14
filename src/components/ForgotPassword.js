import React, { Component } from 'react'
import {Form,Button, FormLabel} from 'react-bootstrap';
import '../App.css';

class ForgotPassword extends Component {
    render() {
        return (
<div class="login-form">
    <form>
        <h2 class="text-center">Reset Password</h2>       
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" required="required"/>
        </div>
        <div class="form-group">
        <div class="row rowCenter">
        <div clas="col">
            <button bsSize="small" type ="submit" class="btn btn-dark btn-block">Submit</button>
            </div>
            <span className="px-1"/>
            <div clas="col">
            <button bsSize="small"  type="button" class="btn btn-dark btn-block" onClick={this.handleClick}>cancel</button>
            </div>
            </div>
        </div> 
    </form>
</div>
  )
    }
}
export default ForgotPassword
//https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form