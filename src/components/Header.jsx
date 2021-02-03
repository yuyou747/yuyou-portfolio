import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import { Link, Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,


    },
    header: {
        width: '100%',
        backgroundColor: '#212121',


    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(2),
    },
    headerButtons: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
    homeButton: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        // marginLeft: 40,
        // marginRight: 40

    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleMenuClick = () => {
        setAnchorEl(null);
    };
    const { match, history } = props;
    const { params } = match;
    const { page } = params;
    const tabNameToIndex = {
        0: "about",
        1: "resume",
        2: "home",
        3: "portfolio",
        4: "contact",
    };

    const indexToTabName = {
        about: 0,
        resume: 1,
        home: 2,
        portfolio: 3,
        contact: 4,
    };
    // if(page!==undefined){}
    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue);
    };
    return (
        <div className={classes.root}>
            {isMobile ? (

                <AppBar className={classes.header} >
                    <Grid container justify="center"
                        alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h6" className={classes.title}>
                                YUYOU YU
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Router>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenu}>
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    value={selectedTab}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleMenuClick}
                                    onChange={handleChange}
                                >
                                    <MenuItem onClick={() => { handleMenuClick(); history.push('/home'); setSelectedTab(2) }} >Home</MenuItem>
                                    <MenuItem onClick={() => { handleMenuClick(); history.push('/about'); setSelectedTab(0) }}  >About</MenuItem>
                                    <MenuItem onClick={() => { handleMenuClick(); history.push('/resume'); setSelectedTab(1) }} >Resume</MenuItem>

                                    <MenuItem onClick={() => { handleMenuClick(); history.push('/portfolio'); setSelectedTab(3) }} >Portfolio</MenuItem>
                                    <MenuItem onClick={() => { handleMenuClick(); history.push('/contact'); setSelectedTab(4) }} >Contact</MenuItem>
                                </Menu>
                            </Router>
                        </Grid>

                    </Grid>
                </AppBar>
            ) : (
                    <AppBar position="static" className={classes.header}>
                        <Grid container justify="center"
                            alignItems="center">
                            <Grid item sm={11} xl={9}>
                                <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth" centered >

                                    <Tab label="About" className={classes.headerButtons} />
                                    <Tab label="Resume" className={classes.headerButtons} />
                                    <Tab label="YUYOU YU" className={classes.homeButton} />
                                    <Tab label="Portfolio" className={classes.headerButtons} />
                                    <Tab label="Contact" className={classes.headerButtons} />
                                </Tabs>
                            </Grid>
                        </Grid>
                    </AppBar>
                )}

            {selectedTab === 0 && <About />}
            {selectedTab === 1 && <Resume />}
            {selectedTab === 2 && <Home />}
            {selectedTab === 3 && <Portfolio />}
            {selectedTab === 4 && <Contact />}

        </div >

    );
}

export default Header;