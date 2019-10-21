import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {withStyles} from "@material-ui/core/styles/index";
import { MEDIA_URL } from '../dataSource';

const styles = theme => ({
  grid_container: {
    marginTop: theme.spacing.unit * 10
  },
  grid_card: {
    maxWidth: 645,
    marginTop: '15px',
    marginLeft: '15px'
  },
  card: {
    minWidth: 365,
    minHeight: 200,
    maxWidth: 365,
  },
  media: {
    height: 140,
  },
});


class PublicationList extends React.PureComponent {

  render() {
    return(
      <React.Fragment>
        <Grid container className={this.props.classes.grid_container}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6" className={this.props.classes.grid_title}>Lista de publicaciones destacadas</Typography>
          </Grid>
          {this.props.publications.map(publication => {
            return (
              <Grid key={publication.id} className={this.props.classes.grid_card}>
                <Card className={this.props.classes.card} key={publication.id}>
                  <CardActionArea>
                    <CardMedia
                        className={this.props.classes.media}
                        image={`${MEDIA_URL}/${publication.pictures[0]}`}
                        title="Contemplative Reptile"
                      />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {publication.title}
                      </Typography>
                      <Typography component="p">
                        $ {publication.price} - {publication.kilometers}km | {publication.city}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Detalle
                    </Button>
                  </CardActions>
                </Card>
                </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PublicationList)
