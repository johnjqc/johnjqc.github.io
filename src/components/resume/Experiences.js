
import React from 'react';


import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(5),
        background: grey[50],
    },title: {
      margin: theme.spacing(5),
    },
    title: {
        margin: theme.spacing(5),
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

function Experiences(props) {
    const { classes } = props

    return (
        <div>
            <Typography variant="h6" color="secondary" className={classes.title}>Experiences</Typography>

            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        DF
                    </Avatar>
                    }
                    title={
                    <React.Fragment>
                        <Typography
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        Scotiabank Colpatria | DigitalFactory
                        </Typography>
                    </React.Fragment>
                    }
                    subheader="2018 - Current"
                />
                <CardContent>
                    <Typography variant="h6" component="p">
                    Tech Lead | Software Development Engineer
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography paragraph>
                    Design and develop the required solutions by the business for the new virtual banking platform, 
                    supporting the process of digital transformation that banks currently experience in Colombia in the Digital Factory.
                    Support in the revision of pull request.
                    </Typography>
                    <Typography paragraph>
                    Ejecucion de pruebas funcionales cruzadas con los desarrollos de los miebros del equipo. 
                    Participate in architectural meetings where technologies and solutions to be used throughout the factory are defined, 
                    to participate in synchronization meetings between the different teams. 
                    Support in the processes of deployment of artifacts in production environments on Windows and Linux.
                    </Typography>
                    <Typography paragraph>
                    We use Java with spring-boot, spring-security, spring-cloud, Netflix suit how to (Feing clients, Eureka, Zuul Proxy), 
                    JUnit and Mockito, AngularIO, React, Jasmine, Redis, Dynomite, MicrosoftSQLServer, Docker, Atlassian suite, Git, Sonar, Jenkins.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        DF
                    </Avatar>
                    }
                    title={
                    <React.Fragment>
                        <Typography
                        component="h2"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        PayU Latam
                        </Typography>
                    </React.Fragment>
                    }
                    subheader="2017 - 2018"
                />
                <CardContent>
                    <Typography variant="h6" component="p">
                    Senior Software Engineer
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography paragraph>
                    Design and development of the Fintech platform for the payment medium "PayU Te Fia", 
                    applying a stack of technologies and design focused on the scalability, 
                    high performance and specific functionalities that contribute to the measures of the business favoring its growth. 
                    The solution is responsible for making an analysis in real time to potential customers from their basic personal data 
                    to determine if it is a person to obtain the application service of basic business rules and a behavior model.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        AE
                    </Avatar>
                    }
                    title={
                    <React.Fragment>
                        <Typography
                        component="h2"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        Alliance Enterprise
                        </Typography>
                    </React.Fragment>
                    }
                    subheader="2012 - 2017"
                />
                <CardContent>
                    <Typography variant="h6" component="p">
                    Software Engineer
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography paragraph>
                    Software Development: Leader in Requirements Analysis and development of transactional applications with technologies, 
                    using JavaEE on WebLogic and Glassfish, Oracle 11g, PL / SQL, frameworks such as RichFaces, Primefaces and Omnifaces. 
                    Web services, backend applications and IBM MQ clients. Development of applications for financial entities under the 
                    message standard of the SWIFT banking network. Development of SWIFT value-added corporate applications for ATMs.
                    </Typography>
                    <Typography paragraph>
                    Advanced knowledge in paradigm of object oriented development and basic knowledge in paradigm and functional programming.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default withStyles(styles)(Experiences);