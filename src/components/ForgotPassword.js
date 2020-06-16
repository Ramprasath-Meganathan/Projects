import React, { Component } from 'react'
import '../App.css';

class ForgotPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            errors: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    //on change event handling
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    //on submit button handling for forgot password 
    onSubmit(e) {
        e.preventDefault()
        const errors = validate(this.state.email)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(() => { this.setState({ errors: [] }) }, 3000);
        }
        else {
            window.alert('Password link has been sent to your email address')
            this.errors = [];
            this.setState({ errors });
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <article className="login">
                <form noValidate>
                    <h2 className="text-center">Reset Password</h2>
                    <article className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange} value={this.state.email} />
                    </article>
                    <article className="form-group">
                        <article className="row rowCenter">
                            <article clas="col">
                                <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-block">Submit</button>
                            </article>
                            <span className="px-1" />
                            <article clas="col">
                                <a href="/">
                                    <button type="button" className="btn btn-dark btn-block" onClick={this.onCancel}>Cancel</button>  </a>
                            </article>

                        </article>
                    </article>
                </form>
                {errors.map(error => (
                    <p key={error} className='error'>Error on Page: {error}</p>
                ))}
            </article>
        )
    }
}

//validation method for the forgotpassword page
const validate = (email) => {
    const errors = [];
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!validEmailRegex.test(email)) {
        errors.push("Email id is not valid")
    }
    return errors;
}

export default ForgotPassword
