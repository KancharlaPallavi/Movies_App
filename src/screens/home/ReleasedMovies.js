import React, { useState } from "react";
import MovieForm from "./MovieForm";
import "./Home.css";
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ImageList from "@material-ui/core/ImageList";
import moment from "moment";
import moviesData from "../../common/moviesData";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  imageList: {
    width: 500,
    height: 450
  }
}));
function ReleasedMovies() {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [genre, setGenre] = React.useState([]);
  const [artist, setArtist] = React.useState([]);
  const [title, setTitle] = React.useState([]);

  const handleGenreChange = (event) => {
    console.log(event.target.value);
    setGenre(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const getFilteredOnGenre = (movies) => {
    if (genre.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      for (let i = 0; i < movie.genres.length; i++) {
        if (genre.includes(movie.genres[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const getFilteredOnArtists = (movies) => {
    if (artist.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      let movieArtists = movie.artists.map(
        (artist) => artist.first_name + "" + artist.last_name
      );
      for (let i = 0; i < movieArtists.length; i++) {
        if (artist.includes(movieArtists[i])) {
          return true;
        }
      }
      return false;
    });
  };


  const getFilterOnTitle = (movies)=>{
    if(title.length===0){
      return movies;
    }
    return movies.filter((movie) => {
        if (title.toLowerCase()===(movie.title).toLowerCase()) {
          return true;
        }
      return false;
    });
  }


  const handleFilter = () => {
    console.log(genre, artist);
    const filteredOnGenre = getFilteredOnGenre(moviesData);
    const filteredOnArtist = getFilteredOnArtists(filteredOnGenre);
    const filteredOnTitle = getFilterOnTitle(filteredOnArtist);
    setFilteredMovies(filteredOnTitle);
  };

  return (
    <div>
      <div className="flex-container">
        <div className="left">
          <div className={useStyles.root}>
            <ImageList rowHeight={350} cols={4} className={useStyles.imageList}>
              <ImageListItem
                cols={4}
                style={{ height: "auto" }}
              ></ImageListItem>
              {filteredMovies.map((item) => (
                <ImageListItem key={item.poster_url}>
                  <Link to ={`/details/${item.id}`}>
                  <img
                    src={item.poster_url}
                    alt={item.title}
                    style={{ width: "100%" }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {moment(item.release_date).format("ddd ll")}
                      </span>
                    }/>
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="right">
          <MovieForm
            genre={genre}
            artist={artist}
            handleArtistChange={handleArtistChange}
            handleGenreChange={handleGenreChange}
            handleTitleChange={handleTitleChange}
            handleFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default ReleasedMovies;
