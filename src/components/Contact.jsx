import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Link from '@material-ui/core/Link';
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

const Contact = (props) => {
    const classes = useStyles();

    const { handleSubmit, control, errors, reset } = useForm({
        criteriaMode: "all",
        mode: "onChange",

    });
    console.log(errors);
    const onSubmit = (data) => {
        console.log(data);
        reset()
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

                        <Button variant="contained"
                            color="secondary"
                            onClick={handleSubmit(onSubmit)}
                            startIcon={<SendIcon>send</SendIcon>}
                            className={classes.button}>
                            Submit
                    </Button>
                        {/* </Grid> */}

                    </Grid>
                </form>
            </FormProvider>
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