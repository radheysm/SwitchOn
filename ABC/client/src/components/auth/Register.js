import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';

// import axios from 'axios';
const Register = ({setAlert, register, isAuthenticated}) =>{
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        department:'',
        password:'',
        password2:''
    });

    const {name, email, department, password, password2} = formData;
     console.log("Department = " + department);
    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
    
    const onSubmit = async e => {
       e.preventDefault();
       if(password !== password2){
           setAlert("Password do not match", 'danger');
       }
       else{
           register({name, email, department, password});
       }
    };
// Reirect if Register successfully
if(isAuthenticated){
  return <Redirect to ='/dashboard'></Redirect>;
}
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)} >
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange = {e => onChange(e)}
          name="name" 
          required />
        </div>
        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          value={email} 
          onChange = {e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Department" 
          name="department" 
          value={department} 
          onChange = {e => onChange(e)}
          required
          />

        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange = {e => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2} 
            onChange = {e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
        </Fragment>


    );
};

Register.propTypes = {
    setAlert:PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = state =>({
       isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, {setAlert, register})(Register);