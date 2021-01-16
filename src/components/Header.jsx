import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },
    headerButtons: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    }
}));

const Header = ({ setPage }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleMenuClick = () => {
        setAnchorEl(null);

    };

    return (
        <div >


            <AppBar position="static">
                <Toolbar>



                    <div className={classes.root}>
                        {isMobile ? (
                            <>
                                <Grid container >
                                    <Grid item xs={11}>
                                        <Typography variant="h6" className={classes.title}>
                                            Yuyou Yu
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={1}>
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
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={handleMenuClick}
                                        >
                                            {/* <Link id='home' to={'/'}> */}

                                            <MenuItem onClick={() => { setPage("About"); handleMenuClick() }}  >About</MenuItem>
                                            <MenuItem onClick={() => { setPage("Resume"); handleMenuClick() }} >Resume</MenuItem>
                                            <MenuItem onClick={() => { setPage("Portfolio"); handleMenuClick() }}>Portfolio</MenuItem>
                                            <MenuItem onClick={() => { setPage("Contact"); handleMenuClick() }}>Contact</MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </>
                        ) : (
                                <Grid container justify="center"
                                    alignItems="center">
                                    <Grid item sm={11} xl={9}>
                                        <div className={classes.headerButtons}>
                                            <Button onClick={() => setPage("About")} > About</Button>
                                            <Button onClick={() => setPage("Resume")} > Resume </Button>

                                            <Typography variant="h6" >
                                                Yuyou Yu
                                     </Typography>
                                            <Button onClick={() => setPage("Portfolio")}>Portfolio</Button>
                                            <Button onClick={() => setPage("Contact")}>Contact</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            )}

                    </div>

                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Header;