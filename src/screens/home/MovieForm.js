import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      formFields: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      root: {
        minWidth: 240,
        maxWidth: 240,
        margin: theme.spacing(1),
        width: '25ch'
    
      },
      title: {
        fontSize: 14,
        color: theme.palette.primary.light,
        marginLeft: 10,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }));
    
    
    
    
    export default function MovieForm() {
      const classes = useStyles();
      const [genres, setgenres] = React.useState('');
      const [artists, setartists] = React.useState('');
      
      const handleChange = (event) => {
        setgenres(event.target.value);
      };
      const handleChange1 = (event) => {
        setartists(event.target.value);
      };
      return (
      <Card className={classes.root}>
      <CardContent>
         <Typography className={classes.title} >
          FIND MOVIES BY:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Movie Name" />
        </form>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genres </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genres}
              onChange={handleChange}
              style={{width:'150%'}}
            >
              
            </Select>
          </FormControl><br/>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Artists </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={artists}
              onChange={handleChange1}
              style={{width:'150%'}}
            >
              
            </Select>
          </FormControl><br/>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Release Date Start"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <form className={classes.container} noValidate style={{marginTop: "8px"}}>
            <TextField
              id="date"
              label="Release Date End"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </CardContent>
        <CardActions>
        <Button variant="contained" color="primary" style={{width:'100%'}}>
          APPLY
        </Button>
        </CardActions>
        </Card>
         );
        }