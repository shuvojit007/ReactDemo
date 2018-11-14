import React, { Component } from "react";

class SignleSeries extends Component {
  state = {
    show: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(json => this.setState({ show: json }));
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SignleSeries;
