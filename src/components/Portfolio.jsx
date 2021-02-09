import "../../node_modules/react-modal-video/scss/modal-video.scss";
import Link from '@material-ui/core/Link';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ModalVideo from 'react-modal-video';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        margin: theme.spacing(3),
        marginTop: theme.spacing(10),
        border: 30
    },
    media: {
        height: 0,
        paddingTop: '95%',
    },
    icons: {
        fontSize: 28,
        color: '#f50057'
    },
    screen: {
        backgroundColor: '#EEEEEE',
        height: '100vh',
    }
}));
const image = [

];

const Portfolio = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false)
    const [imgIsOpen, setImgOpen] = useState(false)
    return (
        <div className={classes.screen} >
            <Grid container direction="row"
                justify="center"
                alignItems="flex-start" >

                <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>

                    <Card className={classes.root} >
                        <CardHeader
                            title="De-Swap"
                            subheader="React Native mobile app"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/De-Swap.jpg"
                            title="De-Swap"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" paragraph>

                                De-Swap is a peer-to-peer social swapping app aimed at young people, and works as a way of swapping items of clothing with other users saving both the environment and the cash in their pockets. Users can upload pictures of their items, view other user’s items and request to swap via our chat functionality. Before you give your old clothes the drop, check out our App and give it a swap!

          </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                JavaScript | Firebase | React Native | CSS

          </Typography>

                        </CardContent>
                        <CardActions disableSpacing>

                            <React.Fragment>

                                <Tooltip title="Watch Demo">
                                    <IconButton aria-label="Watch Demo" onClick={() => setOpen(true)} >

                                        <OndemandVideoIcon className={classes.icons} />
                                    </IconButton>
                                </Tooltip>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="CawFeitBxUk" onClose={() => setOpen(false)} />

                            </React.Fragment>

                            <Tooltip title="View code">
                                <IconButton aria-label="View code">
                                    <Link href="https://github.com/yuyou747/deswap-project-app" >
                                        <GitHubIcon className={classes.icons} />
                                    </Link>
                                </IconButton>
                            </Tooltip>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={10} md={6} lg={5} xl={4} >
                    <Card className={classes.root}>
                        <CardHeader
                            title="My portfolio website"
                            subheader="React website"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/yuyou.png"
                            title="Yuyou Yu"
                        />
                        <CardContent>

                            <Typography variant="body2" color="textSecondary" paragraph>
                                This is my personal website built with React and Material UI. AWS was used as backend.
                                <Link onClick={() => setImgOpen(true)}>
                                    Click to view the backend structure.
                                </Link>
                                {!!imgIsOpen && (
                                    <Lightbox
                                        mainSrc={'/backend-structure.png'}
                                        onCloseRequest={() => setImgOpen(false)}

                                    />)}
                            </Typography>

                            <Typography variant="body1" color="textSecondary" component="p">
                                JavaScript | React | Material UI | AWS
                        </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <Tooltip title="View code">
                                <IconButton aria-label="View code">
                                    <Link href="https://github.com/yuyou747/yuyou-portfolio" >
                                        <GitHubIcon className={classes.icons} />
                                    </Link>
                                </IconButton>
                            </Tooltip>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Portfolio;



