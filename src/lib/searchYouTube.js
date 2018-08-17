//took out callback argument..... may need it (later?)
var searchYouTube = ({key = YOUTUBE_API_KEY, query, max = 5}, callback) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: key,
      maxResults: max,
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
    .fail();
};

window.searchYouTube = searchYouTube;
