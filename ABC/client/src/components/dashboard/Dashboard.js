import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import {getUsers} from '../../actions/auth';
const Dashboard = ({
    auth : {user},
    forms:{assignForms,loading},
    getUsers
}) => {
    useEffect(()=>{
        getUsers()
    },[getUsers])
    return (
       loading && assignForms === null ? <Spinner/> :
       <Fragment>
          <h1 className = "large text-primary">Dashboard</h1>
          <p className="lead">
              <i className="fas fa-user"></i>{' '}
              Welcome {user && user.name}
          </p>
          {assignForms !== null ? (
          <Fragment>
             <div>
                 <p className="lead">
                     Go To Forms and Approve if any form assigned to you
                 </p>
             </div>
          </Fragment>
          ) : (
          <Fragment>
              <p>You have not yet Any form to Any User</p>
              <Link to = '/assign-form' onClick={getUsers} className="btn btn-primary my-1">
                  Assign Form
              </Link>
          </Fragment>
          )}
       </Fragment>
    ); 
}

Dashboard.propTypes = {
    auth:PropTypes.object.isRequired,
    getUsers:PropTypes.func.isRequired

}
const mapStateToProps = state =>({
    auth:state.auth,
    forms:state.assignForms

});

export default connect(mapStateToProps, {getUsers})(Dashboard);
