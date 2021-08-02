import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from '../../common/moviesData';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: 16,
  },
  imageList: {
    height: 450,
  },
  imgClass: {
    cursor: 'pointer',
  }
}));


export default function ReleasedMovies() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} className={classes.imageList} cols={4}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}> 
        </ImageListItem>
        {moviesData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img src={item.poster_url} alt={item.title}  className={classes.imgClass}/>
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {moment(item.release_date).format("ddd ll")}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}