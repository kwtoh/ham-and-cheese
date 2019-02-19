import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./Main.css"
import AppLeft from '../components/AppLeft';
import AppRight from '../components/AppRight';

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

class CenteredGrid extends Component {
	render() {
		const { classes } = this.props;
		return (
			<section className={classes.root}>
			  <Grid container>
			  	<Grid item xs={1}>
					<div className="Border-Left">
						<i className="fas fa-home"></i>
					</div>
			    </Grid>
			    <Grid item xs={5}>
					<AppLeft />
			    </Grid>
			    <Grid item xs={5}>
			    	<AppRight />
			    </Grid>
			    <Grid item xs={1}>
					<div className="Border-Right">
						<i className="fab fa-github"></i>
					</div>
			    </Grid>
			  </Grid>
			</section>
		);
	}	
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
