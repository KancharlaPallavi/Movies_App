import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom"
import { filterByMovieId } from "../../common/moviesData";
import YouTube from 'react-youtube';
import './Details.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default function Details(){
    let {id} = useParams();
    const movie = filterByMovieId(id);
    const opts = {
        height: '300',
        width: '700',
        playerVars: {
            autoplay: 1
        }
    }
return(
    <div>
    <div className="back">
        <Link to="/">  &#60; Back to Home</Link>
    </div>
    <div className="flex-container">
        <div className="left">
            <img src={movie.poster_url} alt={movie.title} />
        </div>
        <div className="middle">
            <div>
                <Typography variant="headline" component="h2">{movie.title} </Typography>
            </div>
            <div>
                <Typography><span className="font">Genre: </span> {movie.genres.join(', ')} </Typography>
            </div>
                <div>
                    <Typography><span className="font">Duration:</span> {movie.duration} </Typography>
                </div>
                 <div>
                    <Typography><span className="font">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
                </div>
                <div>
                    <Typography><span className="font"> Rating:</span> {movie.critics_rating}  </Typography>
                </div>
                <div className="marginTop16">
                    <Typography><span className="font">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                </div>
                <div className="trailerContainer">
                    <Typography><span className="font">Trailer:</span></Typography>
                    <YouTube
                        videoId={movie.trailer_url.split("?v=")[1]}
                        opts={opts}
                    />
                </div>
        </div>
        <div className="right">
            <Typography> <span className="bold">Rate this movie: </span></Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Custom empty icon</Typography>
                    <Rating
                    name="customized-empty"
                    defaultValue={0}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
            </Box>
            <div className="font" style={{marginBottom:16, marginTop: 16}} ><Typography><span className="bold">Artists:</span></Typography></div>
                <ImageList cellHeight={160} cols={2}>
                    {movie.artists.map(artist => (
                    <ImageListItem className="gridTile" onClick={() => this.artistClickHandler(artist.wiki_url)} key={artist.id}>
                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                    <ImageListItemBar
                        title={artist.first_name + " " + artist.last_name}
                    />
                    </ImageListItem>
                     ))}
                </ImageList>
        </div>
    </div>
    </div>
)
}