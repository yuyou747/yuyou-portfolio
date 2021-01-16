
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    largeAvatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        margin: theme.spacing(7),
    },
    smallAvatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(7),
    },

    paper: {
        padding: '6px 16px',
        textAlign: "left",
        margin: theme.spacing(2),
    },
}));


const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <div>

            <Grid container justify="center">
                {isMobile ? (

                    <Avatar alt="Yuyou Yu" src="/Avatar.jpg" className={classes.smallAvatar} />
                ) : (
                        <Avatar alt="Yuyou Yu" src="/Avatar.jpg" className={classes.largeAvatar} />
                    )}
            </Grid>

            < div >
                <Grid container className={classes.root} justify="center" alignItems="center"
                >
                    <Grid item xs={12} sm={10} lg={9} xl={7}>
                        <Paper className={classes.paper}  >
                            <Typography variant="h6">
                                I am currently a student in the Northcoders developing my coding skills and
                                getting ready to step into theprogramming world.
                             </Typography>
                            <Typography variant="h6">
                                I graduated from the University of Manchester then I worked as an
                                accommodation adviser in an education agency for nine months. It was a good platform to develop problem solving
                                and people skills but I was not passionate about the job. I wanted to create, to produce and to be able to see
                                the
                                results of my works. Coding is exactly what I needed! Everytime I solve a problem, I feel a great sense of
                                accomplishment which drives me to learn more.
                            </Typography>

                            <Typography variant="h6">
                                On my spare times, I like to stroke my cat, Scone; hiking without my cat, Scone, and playing with makeup and
                                face paints.
                            </Typography>



                        </Paper>
                    </Grid>
                </Grid>

            </div>
        </div >
    );
}


export default About;