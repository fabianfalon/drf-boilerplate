import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import PublicationList from './PublicationList'
import Loader from './Loader';

const styles = theme => ({
  grid_container: {
    marginTop: theme.spacing.unit * 10
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


class HomeContent extends React.PureComponent {

  render() {
    return(
      <div>
        <Grid container className={this.props.classes.grid_container}>
          <Grid item xs={12}>
          <FormGroup className={this.props.classes.formContainer} display="inline">
          <TextField
            autoFocus={true}
            id="outlined-name"
            label="Que estas buscando?"
            className={this.props.classes.textField}
            value={""}
            margin="normal"
            variant="outlined"
            display="inline"
            />
            <Button variant="contained" color="primary" display="inline">Buscar</Button>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            {this.props.isFetching ?
              <Loader size={40} /> :
              <PublicationList publications={this.props.publications}/>
            }
           </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(HomeContent)
