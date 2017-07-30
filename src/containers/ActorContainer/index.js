import React, { Component } from 'react';
import config from '../../config';
import utils from '../../utils';
import StarRatingComponent from 'react-star-rating-component';

class ActorContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      actor: {},
      movies: []
    };

    console.log(this.props.match);
    this.isMobile = utils.isMobile();
    this.getActorData(this.props.match.params.actor_id);
    this.getMovieData(this.props.match.params.actor_id);
  }

  getActorData(actorId) {
    fetch(`${config.apiUrl}/actor/id/${actorId}/?auth_token=${config.cinemalyticsToken}`)
      .then((result) => {
        return result.json();
      })
      .then((item) => {
        this.setState({actor: item});
      })
  }

  getMovieData(actorId) {
    fetch(`${config.apiUrl}/actor/${actorId}/movies/?auth_token=${config.cinemalyticsToken}`)
      .then((result) => {
        return result.json();
      })
      .then((items) => {
        this.setState({movies: items});
      })
  }

  render() {
    console.log(this.state.actor);
    const actor = this.state.actor;
    const movies = this.state.movies;
    const actorStyle = { backgroundImage: `url('https://image.ibb.co/d57efQ/header.gif')` };
    return (
      <section>
        <section className="actor-section" style={actorStyle}>
          <img src={actor.ProfilePath} className="actor-section-img" />
          <div className="actor-details-block">
            <div className="actor-details-block-name">{actor.Name}</div>
            <div className="actor-details-block-desc">
              <StarRatingComponent name="actor-rating" 
                                   starCount={5}
                                   value={actor.Rating} />
            </div>
          </div>
        </section>
        <section className="actor-movies-section">
          <h3>Movies by {actor.Name}</h3>
          {
            movies.map((movie, index) => {
              console.log(movie);
              const movieStyle = { backgroundImage : `url(${movie.PosterPath})`};
              const movieClass = `${this.isMobile ? 'home-actor-block-mobile' : 'home-actor-block'} actor-movie-section-block`;
              return(
                <a href={`/movie/${movie.Id}`}>
                  <div className={movieClass}
                       key={`movie_${index}`}
                       style={movieStyle}>
                    <div className="home-actor-movie-data">
                      <div className="home-actor-movie-data-title">{movie.Title}</div>
                      <div className="home-actor-movie-data-rating">
                        <StarRatingComponent name="actor-rating" 
                                             starCount={5}
                                             value={movie.Rating} />
                      </div>
                      <div className="home-actor-movie-data-releaseYear">Released in {movie.ReleaseYear}</div>
                      
                    </div>
                  </div>
                  </a>
              );
            })
          }
        </section>

      </section>
      
    );
  }
}

export default ActorContainer;
