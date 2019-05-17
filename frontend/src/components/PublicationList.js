import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";


const styles = theme => ({
  grid_container: {
    marginTop: theme.spacing.unit * 10
  },
  grid_item: {
    paddingRight: theme.spacing.unit * 1,

    paddingLeft: '10px',
    marginLeft: '10px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});


class PublicationList extends React.PureComponent {

  render() {
    return(
      <div>
        <Grid container className={this.props.classes.grid_container}>
          <Grid item xs={12}>
            <p>Publications</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PublicationList)
