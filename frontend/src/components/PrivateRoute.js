import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
  isAuthenticated: state.users.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
