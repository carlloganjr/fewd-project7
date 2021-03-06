document.addEventListener('DOMContentLoaded', function() {
  const vid = document.querySelector('video');
  const spanList = document.querySelectorAll('.spanList');
  const div = document.querySelector('.videoWrapper');
  const playTimes = [0.240, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370,
                    26.880, 32.100, 34.730, 39.430, 42.350, 46.300, 49.270,
                    53.760, 57.780, 60.150];


  vid.addEventListener('play', function() {
    vid.addEventListener('timeupdate', function() {
      for (let i = 0; i < spanList.length; i += 1) {
        let highlight = spanList[i];
        let start = playTimes[i];
        let end = playTimes[i + 1];
        let videoTime = vid.currentTime;

        if (videoTime > start && videoTime < end) {
          highlight.style.color = '#ffb900';
          } else if (videoTime > start && videoTime > end) {
              highlight.style.color = '#000';
          } else {
              highlight.style.color = '#000';
          }
        }
      });
    });

    div.addEventListener('click', function(e) {
      for (let i = 0; i < spanList.length; i += 1) {
        let click = spanList[i];
        let position = playTimes[i];

        if (e.target === click) {
          vid.currentTime = position;
        }
      }
    });

  });
