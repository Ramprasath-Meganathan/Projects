import React, { Component } from 'react'
import '../App.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const errors = validate(this.state.email, this.state.password)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(()=>{ this.setState({errors:[]}) }, 3000);
        }
        else
        {
            window.alert('Login successful')
            this.errors=[];
            this.setState({ errors });
        }     
    }
    render() {
        const { errors } = this.state;
        return (
<div className="login">
    <form noValidate>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email"  onChange={this.onChange}  value={this.state.email}/>
        </div>
        <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} value={this.state.password}/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-dark btn-block" onClick={this.onSubmit}>Log in</button>
        </div>
        <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="/forgotPassword" className="pull-right">Forgot Password?</a>
        </div>        
    </form>
   <a href="/notbuilt"> <p className="text-center">Create an Account</p></a>
    {errors.map(error => (
                 <p key={error} className='error'>Error on Page: {error}</p>
                            ))}
</div>
  )
    }
}

export default Login

const validate = (email, password) => {
    const errors = [];
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!validEmailRegex.test(email)) {
        errors.push("Email id is not valid")
    }
    if (password.length < 6) {
        errors.push("Password should be atleast 6 characters long");
    }


    return errors;
}

//https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=simple-login-form
