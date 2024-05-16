import React from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth > 1005 ? 640 : 480,
      height: window.innerWidth > 1005 ? 360 : 270,
    };

    this._onReady = this._onReady.bind(this);
  }

  updateVideoSize = () => {
    let width, height;

    if (window.innerWidth > 1005) {
      width = 640;
      height = 360;
    } else if (window.innerWidth > 520) {
      width = 480;
      height = 270;
    } else if (window.innerWidth > 360) {
      width = 320;
      height = 180;
    } else {
      width = 240;
      height = 135;
    }

    this.setState({
      width,
      height,
    });

  };

  componentDidMount() {
    window.addEventListener('resize', this.updateVideoSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVideoSize);
  }

  render() {
    const videoOptions = {
      height: this.state.height.toString(),
      width: this.state.width.toString(),
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div>
        <YouTube
          videoId='vVQKKUD5_VE'
          opts={videoOptions}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // event.target.playVideo(); // autoplay
  }
}

export default YouTubePlayer;
