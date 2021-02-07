import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, FormProvider, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    inputBox: {
        width: '90%',
        [theme.breakpoints.up("sm")]: {
            width: '60%',
        },
        [theme.breakpoints.up("lg")]: {
            width: '40%',
        },
        marginTop: theme.spacing(1),
    },
    form: {
        marginTop: theme.spacing(10),

    },
    contactMe: {
        fontSize: 20,
        marginBottom: theme.spacing(3),
        fontWeight: 'bold'
    },
    socialMedia: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    icons: {
        fontSize: 45
    },
    button: {
        marginTop: theme.spacing(4),
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Contact = (props) => {
    const classes = useStyles();
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openFail, setOpenFail] = React.useState(false);
    const [requesting, setRequesting] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
        setOpenFail(false);
    };
    const { handleSubmit, control, errors, reset } = useForm({
        criteriaMode: "all",
        mode: "onChange",

    });
    const onSubmit = (data) => {
        setRequesting(true);
        const postData = {
            "email": data.emailAddress,
            "lastname": data.lastName,
            "firstname": data.firstName,
            "organization": data.organization,
            "message": data.message
        }
        console.log("data", data);
        fetch('https://api.angelayuyou.com/dev/contact', {
            method: 'post',
            body: JSON.stringify(postData)
        }).then((response) => {
            return response.json();
        }).then(data => {
            console.log(data);
            setOpenSuccess(true);
            setRequesting(false);
            reset()
        }).catch(err => {
            setOpenFail(true);
            setRequesting(false);
        })
    };

    return (

        <div>
            <FormProvider >
                <form className={classes.form}>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"

                    >
                        <Typography className={classes.contactMe}>CONTACT ME!</Typography>

                        {/* <Grid item> */}
                        <Controller
                            as={TextField}
                            className={classes.inputBox}
                            id="first-name"
                            name='firstName'
                            label="First Name"
                            variant="outlined"
                            color="secondary"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            error={errors.firstName !== undefined}

                            helperText={errors.firstName !== undefined ? 'Please enter your first name!' : ' '}
                            {...props}
                        />

                        <Controller
                            as={TextField}
                            className={classes.inputBox}
                            id="last-name"
                            name='lastName'
                            label="Last Name"
                            variant="outlined"
                            color="secondary"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            {...props}
                            error={errors.lastName !== undefined}
                            helperText={errors.lastName !== undefined ? 'Please enter your last name!' : ' '}
                            {...props}
                        />

                        <Controller
                            as={TextField}
                            className={classes.inputBox}
                            id="email-address"
                            name='emailAddress'
                            label="Email Address"
                            variant="outlined"
                            color="secondary"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ }}
                            error={errors.emailAddress !== undefined}
                            helperText={errors.emailAddress !== undefined ? 'Please enter your email address!' : ' '}
                            {...props}
                        />


                        <Controller
                            as={TextField}
                            className={classes.inputBox}
                            id="organization"
                            name='organization'
                            label="Organization"
                            variant="outlined"
                            color="secondary"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            error={errors.organization !== undefined}
                            helperText={errors.organization !== undefined ? 'Please enter your organization!' : ' '}
                            {...props}
                        />

                        <Controller
                            as={TextField}
                            className={classes.inputBox}
                            id="message"
                            name='message'
                            label="Message"
                            variant="outlined"
                            color="secondary"
                            multiline
                            rows={4}
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            error={errors.message !== undefined}
                            helperText={errors.message !== undefined ? 'Please enter your message!' : ' '}
                            {...props}
                        />

                        {!requesting
                            ?
                            <Button variant="contained"
                                color="secondary"
                                onClick={handleSubmit(onSubmit)}
                                startIcon={<SendIcon>send</SendIcon>}
                                className={classes.button}>
                                Submit
                            </Button>
                            :
                            <CircularProgress />
                        }
                        {/* </Grid> */}

                    </Grid>
                </form>
            </FormProvider>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Thanks you for contacting me. I have received your message!
                </Alert>
            </Snackbar>
            <Snackbar open={openFail} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    I think I messed up my API, again. Please contact me on Linkin
                </Alert>
            </Snackbar>
            <div className={classes.socialMedia}>
                <Link href="https://github.com/yuyou747" >
                    <GitHubIcon className={classes.icons} color="secondary" />
                </Link>
                <Link href="https://www.linkedin.com/in/yuyou-yu-a20a65173/" >
                    <LinkedInIcon className={classes.icons} color="secondary" />
                </Link>
            </div>

        </div>


    );


};

export default Contact;