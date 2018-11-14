import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Intro from "../../components/Intro/Intro";
class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({ series: json, isFetching: false }));
    console.log(e);
    console.log(e.target.value);
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Intro message="Here you can find all of your most loved series" />
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please Enter the Series Name into the input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No Tv Series Found on this Name</p>
        )}
        {isFetching && <p>Loading........</p>}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
