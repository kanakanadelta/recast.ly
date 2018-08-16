//took out callback argument..... may need it (later?)
var searchYouTube = ({query}, callback) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: YOUTUBE_API_KEY,
      maxResults: 5,
      part: 'snippet',
      q: query,
      embeddable: true,
      type: 'video',
    },
    // success: (results) => {
    //   console.log('SUCCESS! Here\'s your data: ', results.items);
    //   return results.items;
    // },
    // error: () => {
    //   console.log('FAILURE! You darn messed up');
    // },
  })
    .done( ({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .error();
};

window.searchYouTube = searchYouTube;
