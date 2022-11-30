import { Component } from "react";
import { Reader } from "./Reader/Reader";
// import {VideoList} from "./VideoList/VideoList";
// import videos from '../videos.json';
// import { Player } from "./Player/Player";
import publication from '../publication.json'



export class App extends Component{
  state = {
     selectedVideo: null,
  }

   selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    
    return (<>
      {/* <h1>Selected video: {this.state.selectedVideo}</h1>
      <VideoList videos={videos} onSelect={this.selectVideo} />
      <Player url={this.state.selectedVideo} /> */}

      <Reader items={publication} />

    </>)
  }
}


