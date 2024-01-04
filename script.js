function toggleInputBars() {
  var videoType = document.getElementById("videoType").value;
  var movieInputs = document.getElementById("movieInputs");
  var seriesInputs = document.getElementById("seriesInputs");

  if (videoType === "movie") {
    movieInputs.style.display = "block";
    seriesInputs.style.display = "none";
  } else if (videoType === "series") {
    movieInputs.style.display = "none";
    seriesInputs.style.display = "block";
  }
}

function changeVideo(type) {
  var videoEmbed = document.getElementById("videoEmbed");
  var videoContainer = document.getElementById("videoContainer");
  var videoSource = document.getElementById("videoSource").value;

  if (type === "movie") {
    var movieId = document.getElementById("movieId").value;

    if (movieId.trim() !== "") {
      if (/^tt\d+$/.test(movieId)) {
        if (videoSource === "vidsrc") {
          videoEmbed.src = "https://vidsrc.to/embed/movie/" + movieId;
        } else if (videoSource === "superembed") {
          videoEmbed.src = "https://multiembed.mov/directstream.php?video_id=" + movieId;
        }
      } else if (/^\d+$/.test(movieId)) {
        if (videoSource === "vidsrc") {
          videoEmbed.src = "https://vidsrc.to/embed/movie/" + movieId;
        } else if (videoSource === "superembed") {
          videoEmbed.src = "https://multiembed.mov/directstream.php?video_id=" + movieId + "&tmdb=1";
        }
      }

      videoContainer.style.display = "block";
    } else {
      videoContainer.style.display = "none";
    }
  } else if (type === "series") {
    var seriesId = document.getElementById("seriesId").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;

    if (seriesId.trim() !== "" && season.trim() !== "" && episode.trim() !== "") {
      if (/^tt\d+$/.test(seriesId)) {
        if (videoSource === "vidsrc") {
          videoEmbed.src = "https://vidsrc.to/embed/tv/" + seriesId + "/" + season + "/" + episode;
        } else if (videoSource === "superembed") {
          videoEmbed.src = "https://multiembed.mov/directstream.php?video_id=" + seriesId + "&s=" + season + "&e=" + episode;
        }
      } else if (/^\d+$/.test(seriesId)) {
        if (videoSource === "vidsrc") {
          videoEmbed.src = "https://vidsrc.to/embed/tv/" + seriesId + "/" + season + "/" + episode;
        } else if (videoSource === "superembed") {
          videoEmbed.src = "https://multiembed.mov/directstream.php?video_id=" + seriesId + "&season=" + season + "&episode=" + episode;
        }
      }

      videoContainer.style.display = "block";
    } else {
      videoContainer.style.display = "none";
    }
  }
}