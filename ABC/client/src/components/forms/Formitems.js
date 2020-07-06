import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
const Formitems = ({
  auth, 
  post:{
    _id, text,assignTo,date
},showActions
}) => {
  // console.log(postImage);
  return (
    <div className="post bg-white p-1 my-1">
<div>
  <Link to='/'>
    <img
      className="round-img"
      src='/a.jpg'
      alt=""
    />
  </Link>
</div>
<div>
  <p className="my-1">
    {text}
  </p>
   <p className="post-date"> Posted on
<Moment format='YYYY/MM/DD'>{date}</Moment>
  </p>
  {showActions && <Fragment>
  {!auth.loading && assignTo === auth.user._id && (
    <button    
    type="button"
    className="btn btn-success"
  >
    Approve
  </button>
  )}
      </Fragment>}
  
 
</div>
</div>
  );
  }

Formitems.defaultProps = {
    showActions: true
}

Formitems.propTypes = {
   auth:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(Formitems);
