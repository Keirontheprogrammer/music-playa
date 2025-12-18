

const playlist = document.getElementById('playlist');
    const audio = document.getElementById('player');

    // Fetch songs from your backend
    fetch('http://localhost:5000/api/songs')
      .then(res => res.json())
      .then(songs => {
        songs.forEach(song => {
          const div = document.createElement('div');
          div.className = 'song';
          div.textContent = `${song.title} - ${song.artist}`;
          div.onclick = () => {
            audio.src = 'http://localhost:5000' + song.file_url;
            audio.play();
            document.querySelectorAll('.song').forEach(s => s.classList.remove('playing'));
            div.classList.add('playing');
          };
          playlist.appendChild(div);
        });
        songs.forEach(songs => {
            const thumbbar =document.querySelector(".thumb-bar")
            const IMG = document.createElement("img");
            IMG.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wIYUbl1_kw8HeN1BRZK4LYhv8TcFNbp4HA&s"
            
            thumbbar.appendChild(IMG)
        })
      });
  