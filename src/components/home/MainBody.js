import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import LinkedInIcon from "../../images/linkedin.svg";
import TwitterIcon from "../../images/twitter.svg";
import InstagramIcon from "../../images/instagram.png";
import GithubIcon from "../../images/github.png";
import YoutubeIcon from "../../images/youtube.png";

import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  mainBody: {
    flex: 1,
  },
  mainBodyLeft: {
    [theme.breakpoints.up('xs')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5.5),
    },
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  rigthGrid: {

  },
  skillset : {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
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

function MainBody(props) {
  const { classes } = props;

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Container className={classes.mainBody} maxWidth="lg">
      <Grid container spacing={16} justify="flex-start">
        <Box clone order={{ xs: 3, sm: 2 }}>
          <Grid item xs={12} sm={9}>
            
            <div class="main-wrapper" className={classes.mainBodyLeft}>
              
              <Typography variant="h6" color="secondary">Career Profile</Typography>
              <Typography variant="body1" color="Warning" align="center">
                <p>John Jairo is active, dynamic, enterprising, knows what he wants and works to get it. 
                  You can be fully confident that you will perform your duties satisfactorily. 
                  He is a nice person, easily connected and respectful to everyone around him.
                </p>
              </Typography>

              <Typography variant="h6" color="secondary">Experiences</Typography>

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
              
              <Typography variant="h6" color="secondary">Skills &amp; Proficiency</Typography>
              <div className={classes.skillset}>    
                <Chip label="Java"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip label="Kotlin"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip label="Spring Boot"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip label="Spring Security"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip label="Java EE"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
                <Chip label="PL-SQL"
                  clickable
                  color="secondary"
                  deleteIcon={<DoneIcon />}
                  onDelete={handleDelete}
                  variant="outlined"
                />
              </div>
            </div>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={3}>
          <div class="sidebar-wrapper">
            <div class="profile-container">
                <img class="profile" src="assets/images/profile.png" alt="" />
                <Typography variant="h6">
                Software Development Engineer
                </Typography>
            </div>
            <List className={classes.root} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={LinkedInIcon} />
                    </ListItemAvatar>
                    <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.linkedin.com/in/johnquirogac/">
                    {'@johnquirogac'}
                    </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                    <Avatar src={TwitterIcon} />
                    </ListItemAvatar>
                    <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://twitter.com/john_quirogac">
                    {'@john_quirogac'}
                    </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                    <Avatar src={InstagramIcon} />
                    </ListItemAvatar>
                    <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.instagram.com/john_quirogac/">
                    {'@john_quirogac'}
                    </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                    <Avatar src={GithubIcon} />
                    </ListItemAvatar>
                    <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.github.com/johnjqc/">
                    {'@johnjqc'}
                    </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                    <Avatar src={YoutubeIcon} />
                    </ListItemAvatar>
                    <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.youtube.com/channel/UCSZ6j4zbsSNclhklDYgKxEg/">
                    {'@EsOtroCanal'}
                    </Link>
                    </ListItemText>
                  </ListItem>
                </List>
            <div class="education-container container-block">
              <Typography variant="h6" color="secondary">
                Education
              </Typography>
                <List className={classes.root}>
                  <ListItem>
                    <ListItemText primary="Ingeniería en Telemática"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="h2"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Universidad Distrital Francisco José de Caldas
                          </Typography>
                          {"2013 - 2015"}
                        </React.Fragment>
                      } />

                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText primary="Tecnólogo en Sistematización de Datos"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="h2"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Universidad Distrital Francisco José de Caldas
                          </Typography>
                          {"2005 - 2011"}
                        </React.Fragment>
                      } />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText primary="Técnico Laboral en Tecnología e Informática"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="h2"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Corporación “El minuto de Dios” Gente Viva Ecoparque
                          </Typography>
                          {"2003 - 2005"}
                        </React.Fragment>
                      } />
                  </ListItem>
                </List>
            </div>
            
            <div class="languages-container container-block">
              <Typography variant="h6" color="secondary">
              Languages
              </Typography>
                <ul class="list-unstyled interests-list">
                    <li>Spanish <span class="lang-desc">(Native)</span></li>
                    <li>English <span class="lang-desc">B1</span></li>
                </ul>
            </div>
            
            <div class="interests-container container-block">
              <Typography variant="h6" color="secondary">
                Interests
              </Typography>
                <List className={classes.root} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photography" />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MenuBookIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Learning" />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FlightTakeoffIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Travel" />
                  </ListItem>
                </List>
            </div>
            
          </div>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
  
export default withStyles(styles)(MainBody);
