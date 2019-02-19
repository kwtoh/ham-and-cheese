import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./Main.css"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
      	<Grid item xs={1}>
			<div className="Border-Left">
				<i class="fas fa-home"></i>
			</div>
        </Grid>
        <Grid item xs={5}>
			<div className="App-Left">
				<h1>HEL</h1>
			</div>
        </Grid>
        <Grid item xs={5}>
        	<div className="App-Right">
				<h1>LO.</h1>
			</div>
        </Grid>
        <Grid item xs={1}>
			<div className="Border-Right">
				<i class="fab fa-github"></i>
			</div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
