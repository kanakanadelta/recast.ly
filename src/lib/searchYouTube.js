var options = (searchInput) => {
  return {
    key: YOUTUBE_API_KEY,
    maxResults: 5,
    part: 'snippet',
    q: searchInput,
  };
};

//took out callback argument..... may need it (later?)
var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: (results) => {
      console.log('SUCCESS! Here\'s your data: ', results.items);
      return results.items;
    },
    error: () => {
      console.log('FAILURE! You darn messed up', options);
    },
  });
};

window.searchYouTube = searchYouTube;
