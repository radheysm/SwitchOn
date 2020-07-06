import React, {Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import Formitems from './Formitems';
import {getForms} from '../../actions/assignForm';
 
const Posts = ({forms:{assignForms,loading}, getForms}) => {
    useEffect(() =>{
        getForms();
    },[getForms]);
    return loading ? <Spinner/> : (<Fragment>

        <h1 className="large text-primary">
            Forms
        </h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome to the Approval Section
        </p>
        <div className="posts">
            {assignForms.map(form => (
                <Formitems key = {form._id} post = {form}/>
            ))}
        </div>

    </Fragment>
    );
};

Posts.propTypes = {
    getForms:PropTypes.func.isRequired,
    forms:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    forms:state.assignForm
});

export default connect(mapStateToProps, {getForms})(Posts);
