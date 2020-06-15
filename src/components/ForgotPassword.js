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
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const errors = validate(this.state.email)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(()=>{ this.setState({errors:[]}) }, 3000);
        }
        else
        {
            window.alert('Password link has been sent to your email address')
            this.errors=[];
            this.setState({ errors });
        }     
    }
    render() {
        const { errors } = this.state;
        return (
<div className="login">
    <form  noValidate>
        <h2 className="text-center">Reset Password</h2>       
        <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange} value={this.state.email}/>
        </div>
        <div className="form-group">
        <div className="row rowCenter">
        <div clas="col">
            <button  type ="submit" onClick={this.onSubmit} className="btn btn-dark btn-block">Submit</button>
            </div>
            <span className="px-1"/>
            <div clas="col">
            <a href="/">
            <button  type="button" className="btn btn-dark btn-block" onClick={this.onCancel}>Cancel</button>  </a>
            </div>
       
            </div>
        </div> 
    </form>
    {errors.map(error => (
                 <p key={error} className='error'>Error on Page: {error}</p>
                            ))}
</div>
  )
    }
}
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
