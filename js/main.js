document.addEventListener('DOMContentLoaded', () => {
  const vid = document.querySelector('video');
  const spanList = document.querySelectorAll('.spanList');
  const playTimes = [0.240, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370,
                    26.880, 32.100, 34.730, 39.430, 42.350, 46.300, 49.270,
                    53.760, 57.780, 60.150];


  vid.addEventListener('play', () => {
    vid.addEventListener('timeupdate', (e) => {
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
  });
