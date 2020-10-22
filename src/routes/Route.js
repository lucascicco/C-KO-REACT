import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../pages/_layouts/default';
import history from '../services/history';

function RouteWrapper({
  component: Component,
  isPrivate = false,
  signed,
  first_access,
  ...rest
}) {
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/homepage" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  signed: PropTypes.bool.isRequired,
  first_access: PropTypes.bool.isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

const mapStateToProps = (state) => ({
  signed: state.auth.signed,
  first_access: state.auth.first_access,
});

export default connect(mapStateToProps)(RouteWrapper);
