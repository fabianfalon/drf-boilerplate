
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = ({classes, color='primary', margin=true, size}) => {
  return <CircularProgress className={margin && classes.progress} color={color} size={size}/>
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  margin: PropTypes.bool,
  size: PropTypes.number.isRequired
};

export default withStyles(styles)(Loader);
