import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log("from the app,", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
