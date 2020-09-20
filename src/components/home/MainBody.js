import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  mainBody: {
    flex: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  rigthGrid: {

  }
});

function MainBody(props) {
  const { classes } = props

  return (
    <Container className={classes.mainBody} maxWidth="lg">
      <Grid container spacing={16} justify="flex-start">
        <Box clone order={{ xs: 3, sm: 2 }}>
          <Grid item xs={12} sm={9}>
            <div class="main-wrapper" >
            
            <div class="section summary-section">
                <h2 class="section-title"><i class="fa fa-user"></i>Career Profile</h2>
                <div class="summary">
                    <p>John Jairo is active, dynamic, enterprising, knows what he wants and works to get it. You can be fully confident that you will perform your duties satisfactorily. He is a nice person, easily connected and respectful to everyone around him</p>
                </div>
            </div>
            <div class="section experiences-section">
                <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>
                
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Senior Software Engineer</h3>
                            <div class="time">2018 - current</div>
                        </div>
                        <div class="company">Scotiabank olpatria | DigitalFactory</div>
                    </div>
                    <div class="details">
                        <p>Design and develop the required solutions by the business for the new virtual banking platform, supporting the process of digital transformation that banks currently experience in Colombia in the Digital Factory.</p>
                      <p>Support in the revision of pull request.</p>
                      <p>Ejecucion de pruebas funcionales cruzadas con los desarrollos de los miebros del equipo. Participate in architectural meetings where technologies and solutions to be used throughout the factory are defined, to participate in synchronization meetings between the different teams. Support in the processes of deployment of artifacts in production environments on Windows and Linux.</p>
                      <p>We use Java with spring-boot, spring-security, spring-cloud, Netflix suit how to (Feing clients, Eureka, Zuul Proxy), JUnit and Mockito, AngularIO, React, Jasmine, Redis, Dynomite, MicrosoftSQLServer, Docker, Atlassian suite, Git, Sonar, Jenkins.</p>
                      
                    </div>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Senior Software Engineer</h3>
                            <div class="time">2017 - 2018</div>
                        </div>
                        <div class="company">PayU Latam</div>
                    </div>
                    <div class="details">
                        <p>Design and development of the Fintech platform for the payment medium "PayU Te Fia", applying a stack of technologies and design focused on the scalability, high performance and specific functionalities that contribute to the measures of the business favoring its growth. The solution is responsible for making an analysis in real time to potential customers from their basic personal data to determine if it is a person to obtain the application service of basic business rules and a behavior model.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Software Developer</h3>
                            <div class="time">2012 - 2017</div>
                        </div>
                        <div class="company">Alliance Enterprise S.A.S.</div>
                    </div>
                    <div class="details">
                        <p>Software Development: Leader in Requirements Analysis and development of transactional applications with technologies, using JavaEE on WebLogic and Glassfish, Oracle 11g, PL / SQL, frameworks such as RichFaces, Primefaces and Omnifaces. Web services, backend applications and IBM MQ clients. Development of applications for financial entities under the message standard of the SWIFT banking network. Development of SWIFT value-added corporate applications for ATMs.</p>  
                        <p>Advanced knowledge in paradigm of object oriented development and basic knowledge in paradigm and functional programming. </p>
                    </div>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Support and Leader Projects</h3>
                            <div class="time">2010 - 2012</div>
                        </div>
                        <div class="company">Alliance Enterprise S.A.S.</div>
                    </div>
                    <div class="details">
                        <p>Software and Deployment Project Management, Operating Area Server Manager, IBM WebSphere MQ Administration</p>  
                    </div>
                </div>
            </div>
            
            <div class="section projects-section">
                <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
                <div class="intro">
                    <p>I was worked on independient projects fron instatutions and personal work</p>
                </div>
                <div class="item">
                    <span class="project-title"><a href="https://play.google.com/store/apps/details?id=com.udistrital.eventos">Eventos Academicos UD</a></span> - <span class="project-tagline">Hibrid Mobile aplication for administrate academic events, with user modules, register of events, calendar, asitance, certifications and geolocations.</span>
                    
                </div>
                <div class="item">
                    <span class="project-title"><a href="#hook" target="_blank">Odontology Module</a></span> - 
                    <span class="project-tagline">Web Module for administrate odontology area, whit manage historial and adontograma develop in Symphony and Raphael Js. </span>
                </div>
            </div>
            
            <div class="skills-section section">
                <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div class="skillset">    
                  <div class="item">
                    <h3 class="level-title">Java</h3>
                    <div class="level-bar">
                      <div class="level-bar-inner" data-level="95%">
                      </div>                                      
                    </div>
                  </div>
                  <div class="item">
                    <h3 class="level-title">Kotlin</h3>
                    <div class="level-bar">
                      <div class="level-bar-inner" data-level="50%">
                      </div>                                      
                    </div>
                  </div>
                  <div class="item">
                    <h3 class="level-title">SpringBoot</h3>
                    <div class="level-bar">
                      <div class="level-bar-inner" data-level="100%">
                      </div>                                      
                    </div>
                  </div>
                  <div class="item">
                    <h3 class="level-title">SpringSecurity</h3>
                    <div class="level-bar">
                      <div class="level-bar-inner" data-level="95%">
                      </div>                                      
                    </div>
                  </div>
                  <div class="item">
                    <h3 class="level-title">JavaEE</h3>
                    <div class="level-bar">
                      <div class="level-bar-inner" data-level="95%">
                      </div>                                      
                    </div>
                  </div>

                  <div class="item">
                          <h3 class="level-title">PL / SQL</h3>
                          <div class="level-bar">
                              <div class="level-bar-inner" data-level="85%">
                              </div>                                      
                          </div>
                      </div>
                </div>
            </div>
            
        </div>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={3}>
          <div class="sidebar-wrapper">
            <div class="profile-container">
                <img class="profile" src="assets/images/profile.png" alt="" />
                <h3 class="tagline">Full Stack Developer</h3>
            </div>
            
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="linkedin"><i class="fa fa-linkedin"></i><a href="#" target="https://www.linkedin.com/in/johnquirogac/">LinkedIn</a></li>
                    <li class="twitter"><i class="fa fa-twitter"></i><a href="https://twitter.com/john_quirogac" target="_blank">@john_quirogac</a></li>
                </ul>
            </div>
            <div class="education-container container-block">
                <h2 class="container-block-title">Education</h2>
                <div class="item">
                    <h4 class="degree">Ingeniería en Telemática</h4>
                    <h5 class="meta">Universidad Distrital Francisco José de Caldas</h5>
                    <div class="time">2013 - 2015</div>
                </div>
                <div class="item">
                    <h4 class="degree">Tecnólogo en Sistematización de Datos</h4>
                    <h5 class="meta">Universidad Distrital Francisco José de Caldas</h5>
                    <div class="time">2005 - 2011</div>
                </div>
                <div class="item">
                    <h4 class="degree">Técnico Laboral en Tecnología e Informática</h4>
                    <h5 class="meta">Corporación “El minuto de Dios” Gente Viva Ecoparque</h5>
                    <div class="time">2003 - 2005</div>
                </div>
				
				
            </div>
            
            <div class="languages-container container-block">
                <h2 class="container-block-title">Languages</h2>
                <ul class="list-unstyled interests-list">
                    <li>Spanish <span class="lang-desc">(Native)</span></li>
                    <li>Spanish <span class="lang-desc">B1</span></li>
                </ul>
            </div>
            
            <div class="interests-container container-block">
                <h2 class="container-block-title">Interests</h2>
                <ul class="list-unstyled interests-list">
                    <li>Travel</li>
                    <li>Photography</li>
                    <li>MeetUps</li>
                </ul>
            </div>
            
          </div>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
  
export default withStyles(styles)(MainBody);
