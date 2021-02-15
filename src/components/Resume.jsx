import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        textAlign: "left"
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    oppositeContent: {
        flex: 0.03,
        padding: 0
    },
    dashtext: {
        fontStyle: "italic"
    },
    button: {
        margin: theme.spacing(1.5),
        marginTop: theme.spacing(11),
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
}));

const Resume = () => {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <div>
            <Grid container justify="center">
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<Icon><GetAppIcon></GetAppIcon></Icon>} href="https://yuyou-profile-website.s3.eu-west-2.amazonaws.com/YuyouYuCvNew.pdf
                    " download="YuyouYuCv.pdf"
                >Download my CV </Button>
            </Grid>
            {isMobile ? (
                <div>
                    <Timeline >
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.oppositeContent}>

                            </TimelineOppositeContent >
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="textSecondary">
                                    09/2020 - 01/2021
                                    </Typography>
                                <Box m={1}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="body2" className={classes.title} >
                                            Northcoders coding bootcamp, Trainee
                                            </Typography>
                                        <Typography variant="body2">
                                            • Built experiences to work in pairs and groups remotely as well as TDD development.
                                            <br />
                                            • Developed skills to be a professional JavaScript software engineer systematically.
                                            </Typography>

                                    </Paper>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.oppositeContent}>

                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <WorkIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="textSecondary">
                                    09/2019 - 06/2020
                                    <br />
                                    Work Experience


                                </Typography>
                                <Box m={1}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="body2" className={classes.title}>
                                            Xinlung Group Ltd, Accommodation advisor
                                            </Typography>
                                        <Typography variant="body2">
                                            • Self-learned Python to improve work efficiency:<br />
                                        </Typography>
                                        <Typography variant="body2" className={classes.dashtext}>
                                            - Used Python script to download structured data from multiple web pages and converting into Excel format;
                                            <br />
                                            - Used Python-Wechat API to send notification messages to certain students automatically.<br />
                                        </Typography>

                                        <Typography variant="body2">
                                            • Provided high level of customer service while achieving the sales targets. Received zero complain. Helped the company to build positive reputation.
                                            <br />
                                            • Built and executed two email marketing campaigns to raise students’ awareness on products and sales events(e.g. live stream). 23% of the students booked accommodation with us afterwards.
                                        </Typography>
                                    </Paper>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.oppositeContent}>

                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />

                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="textSecondary">
                                    2016-2019
                                    <br />
                                    Education

                                </Typography>
                                <Box m={1}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="body2" className={classes.title}>
                                            the University of Manchester, BSc. Fashion Marketing
                                                    </Typography>
                                        <Typography variant="body2">
                                            • Achieved 2-2 honor degree.
                                            <br />
                                            • Worked as financial manager in the final year project of starting a business.
                                            <br />
                                            • Grasp multiple software including InDesign, Photoshop, Illustrator and Microsoft Office.
                                                        </Typography>
                                    </Paper>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.oppositeContent}>

                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />

                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="textSecondary">
                                    2013-2015
                                    <br />
                                    Education

                                </Typography>

                                <Box m={1}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="body2" className={classes.title}>
                                            New College Durham, BTEC Level 3
                                        </Typography>
                                        <Typography variant="body2">
                                            • Achieved triple grade Distinction* Distinction* Distinction
                                        </Typography>

                                    </Paper>
                                </Box>

                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className={classes.oppositeContent}>

                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined">
                                    <SchoolIcon />
                                </TimelineDot>

                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="body2" color="textSecondary">
                                    2008-2012
                                    <br />
                                        Education

                                </Typography>

                                <Box m={1} >
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="body2" className={classes.title}>
                                            Durham Johnston School, GCSE
                                                    </Typography>
                                        <Typography variant="body2">• English: C, Maths: A*, Additional Maths: B</Typography>

                                    </Paper>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            ) : (
                    <div>
                        <Grid container direction="row" justify="center"
                            alignItems="center">
                            <Grid item md={9} lg={8} xl={7}>
                                <Timeline align="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="textSecondary">
                                                09/2020 - 01/2021
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="secondary">
                                                <LaptopMacIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Box m={1}>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        Northcoders coding bootcamp, Trainee
                                                    </Typography>
                                                    <Typography>
                                                        • Built experiences to work in pairs and groups remotely as well as TDD development.
                                                    </Typography>
                                                    <Typography>
                                                        • Developed skills to be a professional JavaScript software engineer systematically.
                                                    </Typography>

                                                </Paper>
                                            </Box>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="textSecondary">
                                                09/2019 - 06/2020
                                                <br />
                                                Work Experience


                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary">
                                                <WorkIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Box m={1}>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        Xinlung Group Ltd, Accommodation advisor
                                                    </Typography>
                                                    <Typography>• Self-learned Python to improve work efficiency:</Typography>
                                                    <Box ml={2}>
                                                        <Typography className={classes.dashtext}>
                                                            - Used Python script to download structured data from multiple web pages and converting into Excel format;
                                                        </Typography>
                                                        <Typography className={classes.dashtext}>
                                                            - Used Python-Wechat API to send notification messages to certain students automatically.
                                                        </Typography>
                                                    </Box>


                                                    <Typography>
                                                        • Provided high level of customer service while achieving the sales targets. Received zero complain. Helped the company to build positive reputation.
                                                    </Typography>
                                                    <Typography>
                                                        • Built and executed two email marketing campaigns to raise students’ awareness on products and sales events(e.g. live stream). 23% of the students booked accommodation with us afterwards.
                                                    </Typography>
                                                </Paper>
                                            </Box>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="textSecondary">
                                                2016-2019
                                                <br />
                                                Education

                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" variant="outlined">
                                                <SchoolIcon />
                                            </TimelineDot>
                                            <TimelineConnector />

                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Box m={1}>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        the University of Manchester, BSc. Fashion Marketing
                                                    </Typography>
                                                    <Typography>
                                                        • Achieved 2-2 honor degree.
                                                        </Typography>
                                                    <Typography>
                                                        • Worked as financial manager in the final year project of starting a business.
                                                         </Typography>
                                                    <Typography>
                                                        • Grasp multiple software including InDesign, Photoshop, Illustrator and Microsoft Office.
                                                        </Typography>
                                                </Paper>
                                            </Box>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="textSecondary">
                                                2013-2015
                                                <br />
                                                    Education

                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" variant="outlined">
                                                <SchoolIcon />
                                            </TimelineDot>
                                            <TimelineConnector />

                                        </TimelineSeparator>
                                        <TimelineContent>

                                            <Box m={1}>
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        New College Durham, BTEC Level 3
                                                    </Typography>
                                                    <Typography>• Achieved triple grade Distinction* Distinction* Distinction</Typography>

                                                </Paper>
                                            </Box>

                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="textSecondary">
                                                2008-2012
                                                <br />
                                                    Education

                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" variant="outlined">
                                                <SchoolIcon />
                                            </TimelineDot>

                                        </TimelineSeparator>
                                        <TimelineContent>

                                            <Box m={1} >
                                                <Paper elevation={3} className={classes.paper}>
                                                    <Typography variant="h6" component="h1">
                                                        Durham Johnston School, GCSE
                                                    </Typography>
                                                    <Typography>• English: C, Maths: A*, Additional Maths: B</Typography>

                                                </Paper>
                                            </Box>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Grid>
                        </Grid>
                    </div>
                )}

        </div>
    );

};

export default Resume;




