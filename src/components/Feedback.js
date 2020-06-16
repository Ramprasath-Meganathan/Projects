import React, { Component } from 'react'
import '../App.css';

//feedback page for the users
class Feedback extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            comment: '',
            errors: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    //functionality which triggers when user modifies the text contents
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    //on page submission it ensures that the website is validated and then submits
    onSubmit(e) {
        e.preventDefault()
        const errors = validate(this.state.name, this.state.email, this.state.comment)
        if (errors.length > 0) {
            this.setState({ errors });
            setTimeout(() => { this.setState({ errors: [] }) }, 3000);
        }
        else {
            window.alert('Feedback updated')
            this.errors = [];
            this.setState({ errors });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <article className="feedback">
                <form noValidate>
                    <h2 className="text-center">Feedback</h2>
                    <article className="form-group">
                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={this.state.name} placeholder="Name" />
                    </article>
                    <article className="form-group">
                        <input type="email" name="email" className="form-control" onChange={this.onChange} value={this.state.email} placeholder="Email" />
                    </article>
                    <article className="form-group">
                        <textarea rows="5" cols="50" name="comment" className="form-control" onChange={this.onChange} value={this.state.comment} placeholder="Comments"></textarea>
                    </article>
                    <article className="form-group">
                        <article className="row rowCenter">
                            <article clas="col">
                                <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-block">Submit</button>
                            </article>
                            <span className="px-1" />
                            <article clas="col">
                                <a href="/">
                                    <button type="button" className="btn btn-dark btn-block" onClick={this.Oncancel}>cancel</button>
                                </a>
                            </article>
                        </article>
                    </article>
                </form>
                {errors.map(error => (
                    <article className='error'>Error on Page: {error}</article>
                ))}
            </article>
        )
    }
}

//validation method for the feedback page to be called on submit
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