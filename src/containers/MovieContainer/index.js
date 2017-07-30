import React, { Component } from 'react';
import config from '../../config';
import utils from '../../utils';
import StarRatingComponent from 'react-star-rating-component';

class MovieContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      movie: {}
    };

    this.isMobile = utils.isMobile();
    this.getMovieData(this.props.match.params.movie_id);
  }

  getMovieData(movieId) {
    fetch(`${config.apiUrl}/movie/id/${movieId}/?auth_token=${config.cinemalyticsToken}`)
      .then((result) => {
        return result.json();
      })
      .then((item) => {
        this.setState({movie: item});
      })
  }

  render() {
    console.log(this.state.movie);
    const movie = this.state.movie;
    const actorStyle = { backgroundImage: `url('https://image.ibb.co/jjyJPk/home_slider_1.jpg')` };
    return (
      <section>
        {
          movie.Title &&
          <span>
            <section className="actor-section" style={actorStyle}>
              {
                !this.isMobile &&
                <div className="movie-section-container">
                  <div className="movie-section-container-img">
                    <img src={movie.PosterPath} />
                  </div>
                  <div className="movie-section-container-overview">
                    <div className="movie-section-container-overview-head">OVERVIEW</div>
                    <div className="movie-section-container-overview-desc-block">
                      <div className="movie-section-container-overview-desc">
                        <label>Movie :</label> {movie.Title}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Release Date :</label> {movie.ReleaseDate}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Rating :</label> <StarRatingComponent name="actor-rating" 
                                                                     className="movie-rating"
                                                                     starCount={5}
                                                                     value={movie.Rating} />
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Genre :</label> {movie.Genre}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Description :</label> {movie.Description}
                      </div>
                    </div>
                  </div>
                </div>
              }

              {
                this.isMobile &&
                <div className="movie-section-container-mobile">
                  <div className="movie-section-container-img-mobile">
                    <img src={movie.PosterPath} />
                  </div>
                  <div className="movie-section-container-overview-mobile">
                    <div className="movie-section-container-overview-head">OVERVIEW</div>
                    <div className="movie-section-container-overview-desc-block">
                      <div className="movie-section-container-overview-desc">
                        <label>Movie :</label> {movie.Title}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Release Date :</label> {movie.ReleaseDate}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Rating :</label> <StarRatingComponent name="actor-rating" 
                                                                     className="movie-rating"
                                                                     starCount={5}
                                                                     value={movie.Rating} />
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Genre :</label> {movie.Genre}
                      </div>
                      <div className="movie-section-container-overview-desc">
                        <label>Description :</label> {movie.Description}
                      </div>
                    </div>
                  </div>
                </div>
              }
              
            </section>
            <section className="actor-section">
              <div className="movie-section-trailer">
                <iframe className={this.isMobile ? 'movie-iframe-mobile' : 'movie-frame'}
                        src={movie.TrailerLink.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')}
                        frameBorder="0"
                        allowFullScreen></iframe>
              </div>
            </section>
          </span>
        }
        {
          !movie.Title &&
          <div></div>
        }

      </section>
      
    );
  }
}

export default MovieContainer;
