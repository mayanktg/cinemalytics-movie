import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
// import Actor from './Actor';
import utils from '../utils';
import StarRatingComponent from 'react-star-rating-component';

class Home extends Component {
  static propTypes = {
    datas: PropTypes.array.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
    };

    this.isMobile = utils.isMobile();
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      autoplay: false
    };

    if (this.isMobile) {
      settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false
      };
    }

    const style = { backgroundImage : `url(${this.props.backgroundImage})`};
    console.log(style);
    const datas = this.props.datas;
    return (
      <section className="home-section"
               style={style}>
          <h3>{this.props.title}</h3>
        <section className="home-section-slider-box">
          <Slider {...settings}>
            {
              datas && datas.map((data, index) => {
                const actorStyle = { backgroundImage: `url(${data.ProfilePath})` };
                console.log(data);
                return (
                  <a href={`/actor/${data.Id}`}>
                    <div className={this.isMobile ? 'home-actor-block-mobile' : 'home-actor-block'}
                         key={index}
                         style={actorStyle}>
                      <div className="home-actor-block-data">
                        <div className="home-actor-block-data-title">{data.Name}</div>
                        <div className="home-actor-block-data-rating">
                          <StarRatingComponent name="actor-rating" 
                                               starCount={5}
                                               value={data.Rating} />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })
            }
            <div>1</div>
          </Slider>
        </section>
      </section>
      
    );
  }
}

export default Home;
