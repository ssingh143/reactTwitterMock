import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
} from '@material-ui/core';
import { logout, getUserById, isAuthenticated } from '../../modules/users';

const styles = theme => ({
  flex: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export const Header = ({ classes, isAuthenticated, user, onLogout }) => (
  <AppBar>
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        <Link to="/" className={classes.link}>
          {user ? `Welcome ${user.username}` : 'Mock Twitter App'}
        </Link>
      </Typography>
      {isAuthenticated ? (
        <Button color="inherit" onClick={onLogout}>
          Logout
        </Button>
      ) : (
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      )}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state.users),
  user: getUserById(state.users, state.users.active),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);
