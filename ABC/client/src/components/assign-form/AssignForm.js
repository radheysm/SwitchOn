import React, { useState,Fragment} from 'react';
import {connect} from 'react-redux';
import {assignForm} from '../../actions/assignForm';
const axios = require('axios');


const AssignForm = ({users,assignForm}) => {
  
  const [formData, setFormData] = useState({
    text:'',
    assignTo:''
});
// console.log(users);
const {text, assignTo} = formData;
const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

const onSubmit = async e => {
   e.preventDefault();
   assignForm({text,assignTo});
   
};
return (
    <Fragment>
        <h1 className="large text-primary">Form</h1>
  <p className="lead"><i className="fas fa-user"></i> Create Your Form and Assign For Approval</p>
  <form className="form" onSubmit = {e => onSubmit(e)} >
    <div className="form-group">
      <input 
      type="text" 
      placeholder="text" 
      value={text} 
      onChange = {e => onChange(e)}
      name="text" 
      required />
    </div>
    <div className="form-group">
      <lable>Select User To Assign Form</lable>
      </div>
      <div className="form-group">
      <select
      name="assignTo" 
      value={assignTo} 
      onChange = {e => onChange(e)}
      required
       >
         <option value={''}>None
         </option>
         {users[0]? users[0].map((user)=>(
           <option value = {user._id}>{user.name}</option>
         )):""}
    </select>
    </div> 
    <input type="submit" className="btn btn-primary" value="Assign" />
  </form>
    </Fragment>
    )
    
}

const mapStateToProps = state =>({
   users:state.auth.users
});



export default connect(mapStateToProps,{assignForm})(AssignForm);






