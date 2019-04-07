import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
  },
});

class Page404 extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="display4">404</Typography>
        <Typography variant="headline">
         Somthing wrong here...
        </Typography>
        <Button
          variant="extendedFab"
          className={classes.button}
          component={Link}
          to="/"
        >
          <Typography variant="button">&lArr; back</Typography> 
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Page404);
