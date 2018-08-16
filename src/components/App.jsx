//Our stateful component that extends from React.Component --> getting its functionalities
class App extends React.Component {
  //inheriting the whole object of props and the React.Component Super Class
  constructor(props) {
    super(props);
    //this is being passed down to all the component children (i.e. Search, VideoPlayer, VideoList)
    this.state = {
      //want to have a listener for selecting a video in VideoList
      // currentVideo: <VideoPlayer video={} />,
      currentVideo: this.props.data[0],
      currentSearchInput: '',
    };
  }

  handleVideoClick(event) {
    //using the built in setState function ...
    console.log(event);
    this.setState({
      //modify property in this.state
      currentVideo: event,
    });
  }

  handleSearchChange(event) {
    console.log(event);
    this.setState({
      currentSearchInput: searchYouTube(options(event)),
    });
  }

  //Render following components into our DOM
  //In each JSX component, pass in desired property and prop name in props
  //Don't pass in onClick property to a tag until it is actually used for onClick
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchChange={this.handleSearchChange.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.currentSearchInput || this.props.data} clickHandler={this.handleVideoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
