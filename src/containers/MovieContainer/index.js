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
        <section className="actor-section" style={actorStyle}>
          <div className="movie-section-trailer">
            <iframe className={this.isMobile ? 'movie-iframe-mobile' : 'movie-frame'} src="https://www.youtube.com/embed/hctApy_i-qg" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>
      </section>
      
    );
  }
}

export default MovieContainer;
