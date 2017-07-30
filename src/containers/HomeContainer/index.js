import React, { Component } from 'react';
// import { Router } from 'react-router';
// import { browserHistory } from 'react-router';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import config from '../../config';
import Slider from 'react-slick';
import HomeSlider from '../../components/HomeSlider';


class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      actors: [],
      actresses: [],
      actorsLoading: false,
      actressesLoading: false
    };
  }

  getActorData(actorType) {
    fetch(`${config.apiUrl}/analytics/${actorType}ActorsByHighestRating/responseonrequest?authtoken${config.cinemalyticsToken}`)
      .then((result) => {
        return result.json();
      })
      .then((items) => {
        if (actorType === 'Male') {
          this.setState({actors: items});
        } else if (actorType === 'Female') {
          this.setState({actresses: items});
        }
      })
  }

  componentDidMount() {
    this.getActorData('Male');
    this.getActorData('Female');
  }

  render() {
    return (
      <section>
        {
          this.state.actors.length &&
          <HomeSlider datas={this.state.actors}
                      backgroundImage="https://image.ibb.co/jjyJPk/home_slider_1.jpg"
                      title="Top 10 Actors by Rating" />
        }
        {
          this.state.actresses.length &&
          <HomeSlider datas={this.state.actresses}
                      backgroundImage="https://image.ibb.co/iKCjx5/home_slider_2.jpg"
                      title="Top 10 Actresses by Rating" />
        }
      </section>
      
    );
  }
}

export default Home;
