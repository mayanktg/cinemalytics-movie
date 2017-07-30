import React, { Component, PropTypes } from 'react';

class Actor extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div className="home-actor-block">
        {data.Name}
      </div>
    );
  }
}

export default Actor;
