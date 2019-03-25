var timer = 0;

loadYoutubeApi();

let player = new Array(N);
const duration = 10;

for (let i = 0; i < N; i++) {
  videos[i].endSeconds = videos[i] + duration;
}

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  for (let i = 0; i < N; i++) {
    player[i] = new YT.Player(`reference_player_${i}`, {
      videoId: videos[i].videoId,
      playerVars: {
        autoplay: '0',
        controls: '0',
        enablejsapi: '1',
        rel: '0',
        start: videos[i].startSeconds,
        end: videos[i].endSeconds,
      },
    });
  }
}

function loadYoutubeApi() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function show_video(i) {
  $(`#reference_player_${i}`).toggle();
};

function ref_restartVideoSection(i) {
  return function() {
    player[i].seekTo(videos[i].startSeconds);
  }
}

function ref_restartFunction(i) {
  clearTimeout(timer);
  player[i].seekTo(videos[i].startSeconds);
  player[i].playVideo();
}

function ref_playFunction(i) {
  player[i].playVideo();
}

function ref_pauseFunction(i) {
  player[i].pauseVideo();
}
