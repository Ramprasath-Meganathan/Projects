import React, { Component } from 'react'
import '../App.css';

class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            email: '',
            comment:'',
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
        const errors = validate(this.state.name, this.state.email, this.state.comment)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(()=>{ this.setState({errors:[]}) }, 3000);
        }
        else
        {
            window.alert('Feedback updated')
            this.errors=[];
            this.setState({ errors });
        }     
    }

    render() {
        const { errors } = this.state;
        return (
<div className="feedback">
    <form noValidate>
        <h2 className="text-center">Feedback</h2>       
        <div className="form-group">
            <input type="text"  name="name"  className="form-control" onChange={this.onChange} value={this.state.name}  placeholder="Name"/>
        </div>
        <div className="form-group">
            <input type="email" name="email"  className="form-control" onChange={this.onChange} value={this.state.email}  placeholder="Email"/>
        </div>
        <div className="form-group">
        <textarea rows="5" cols="50" name="comment"  className="form-control" onChange={this.onChange} value={this.state.comment}  placeholder="Comments"></textarea>
        </div>
        <div className="form-group">
        <div className="row rowCenter">
        <div clas="col">
            <button type ="submit" onClick={this.onSubmit} className="btn btn-dark btn-block">Submit</button>
            </div>
            <span className="px-1"/>
            <div clas="col">
            <a href="/">
            <button type="button" className="btn btn-dark btn-block" onClick={this.Oncancel}>cancel</button>
            </a>
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

const validate = (name, email, comment) => {
    const errors = [];
    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (name.length === 0) {
        errors.push('Name is required')
    }
    if (!validEmailRegex.test(email)) {
        errors.push("Email id is not valid")
    }
    if (comment.length === 0) {
        errors.push("Comment is required");
    }


    return errors;
}


export default Feedback