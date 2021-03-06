var VideoListEntry = (props) => (
  //clicking the video entry causes this console.log to fire another 5 times
  //we want the props.video associated with each video
  <div className="video-list-entry media" onClick={() => props.clickHandler(props.video)} >
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.title} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" >{props.video.snippet.title} </div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
  
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;


//************************* in between curly braces on some event, you run some function.  */