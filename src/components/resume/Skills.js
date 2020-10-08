
import React from 'react';

import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
    },
    title: {
      margin: theme.spacing(5),
    },
    skillset : {
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
});

function Skills(props) {
    const { classes } = props

    const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };

    return (
        <div>
            <Typography variant="h6" color="secondary" className={classes.title}>Skills &amp; Proficiency</Typography>
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
    );
}

export default withStyles(styles)(Skills);