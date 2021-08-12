import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Button, CardActions, Checkbox } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import artists from '../../common/artists';
import genres from '../../common/genres';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';

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

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    
    export default function MovieForm(props) {
      const classes = useStyles();
      return (
      <Card className={classes.root}>
      <CardContent>
         <Typography className={classes.title} >
          FIND MOVIES BY:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Movie Name" onChange={props.handleTitleChange}/>
        </form>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genres </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              multiple
              value={props.genre}
              onChange={props.handleGenreChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
            {genres.map((genre) => (
            <MenuItem key={genre.name} value={genre.name}> 
              <Checkbox checked={props.genre.indexOf(genre.name) > -1}/>
              <ListItemText primary={genre.name} />
            </MenuItem>
            ))}
            </Select>
          </FormControl><br/>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Artists </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              multiple
              value={props.artist}
              onChange={props.handleArtistChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
            {artists.map((artist) => (
            <MenuItem key={artist.first_name + artist.last_name} value={artist.first_name + artist.last_name}>
              <Checkbox checked={
                    props.artist.indexOf(artist.first_name + artist.last_name) >
                    -1
                  } />
              <ListItemText primary={artist.first_name + " " + artist.last_name} />
            </MenuItem>
            ))}
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
        <Button variant="contained" color="primary" style={{width:'100%'}} onClick={props.handleFilter}>
          APPLY
        </Button>
        </CardActions>
        </Card>
         );
        }