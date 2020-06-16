import React, { Component } from 'react'
import '../App.css';

//Login page for the website
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
    //on change event handling
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    //on submit event handling
    onSubmit(e) {
        e.preventDefault()
        const errors = validate(this.state.email, this.state.password)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(() => { this.setState({ errors: [] }) }, 3000);
        }
        else {
            window.alert('Login successful')
            this.state.email=''
            this.state.password=''
            this.errors = [];
            this.setState({ errors });
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <article className="login">
                <form noValidate>
                    <h2 className="text-center">Log in</h2>
                    <article className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange} value={this.state.email} />
                    </article>
                    <article className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} value={this.state.password} />
                    </article>
                    <article className="form-group">
                        <button type="submit" className="btn btn-dark btn-block" onClick={this.onSubmit}>Log in</button>
                    </article>
                    <article className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="/forgotPassword" className="pull-right">Forgot Password?</a>
                    </article>
                </form>
                <a href="/notbuilt"> <article className="text-center">Create an Account</article></a>
                {errors.map(error => (
                    <p key={error} className='error'>Error on Page: {error}</p>
                ))}
            </article>
        )
    }
}

export default Login

//validation method for login
const validate = (email, password) => {
    const errors = [];
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!validEmailRegex.test(email)) {
        errors.push("Email id is not valid")
    }
    if (password.length === 0) {
        errors.push("Password is required");
    }


    return errors;
}


