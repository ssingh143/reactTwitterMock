import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  MuiThemeProvider,
  createMuiTheme,
  red,
} from '@material-ui/core';
import Header from '../../containers/Header';

const styles = theme => ({
  root: {
    paddingTop: 100,
  },
  page: {
    marginTop: theme.spacing.unit * 4,
  },
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
});

const Layout = ({ classes, children }) => (
  <MuiThemeProvider theme={theme}>
    <main className={classes.root}>
      <Header />
      <Grid container justify="center" className={classes.page}>
        <Grid item xs={11} sm={8} md={4}>
          {children}
        </Grid>
      </Grid>
    </main>{' '}
  </MuiThemeProvider>
);

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  children: null,
};

export default withStyles(styles)(Layout);
