import React, { Component } from 'react'
import {Form,Button, FormLabel} from 'react-bootstrap';
import '../App.css';

class Feedback extends Component {
    render() {
        return (
<div class="feedback">
    <form>
        <h2 class="text-center">Feedback</h2>       
        <div class="form-group">
            <input type="text"  class="form-control" placeholder="Name" required="required"/>
        </div>
        <div class="form-group">
            <input type="email"  class="form-control" placeholder="Email" required="required"/>
        </div>
        <div class="form-group">
        <textarea rows="5" cols="50"  class="form-control" placeholder="Comments" required="required"></textarea>
        </div>
        <div class="form-group">
        <div class="row rowCenter">
        <div clas="col">
            <button bsSize="small" type ="submit" class="btn btn-dark btn-block">Submit</button>
            </div>
            <span className="px-1"/>
            <div clas="col">
            <button bsSize="small"  type="button" class="btn btn-dark btn-block">cancel</button>
            </div>
            </div>
        </div>   
    </form>
</div>
  )
    }
}

export default Feedback