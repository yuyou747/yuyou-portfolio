import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Particles from "./Particles";
import Typist from 'react-typist';
import { TextField } from '@material-ui/core';
import Particle from './Particles';

const useStyles = makeStyles((theme) => ({

    title: {
        fontSize: 60,
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(10),
        color: 'white'


    },
    mobileTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(15),
        color: 'white'
    },
    header: {
        height: '100%',
        width: '100%',


        position: 'fixed',
        top: 100,
        right: 100,
        left: 5,
        [theme.breakpoints.up("xs")]: {
            left: 15,
        },
        [theme.breakpoints.up("lg")]: {
            left: 300,
        },
        [theme.breakpoints.up("xl")]: {
            left: 400,
        },
    },
    body: {
        margin: 0,
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black',
    }
}));



const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
    return (

        <div className={classes.body}>
            <Particles />
            <div className={classes.header}>
                <Grid container >
                    {isMobile ? (
                        <Grid item >
                            <Typist className={classes.mobileTitle}>
                                HI!<br />
                    I'M YUYOU, <br />
                    A SOFTWARE DEVELOPER...
                </Typist>

                        </Grid>

                    ) : (
                            <Grid item >
                                <Typist className={classes.title}>
                                    HI!<br />
                            I'M YUYOU, <br />
                            A SOFTWARE DEVELOPER...

        </Typist>
                            </Grid>
                        )}
                </Grid>

            </div>

        </div>


    );
}


export default Home;