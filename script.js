

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
          // songs.forEach(songs => {
          //     const thumbbar =document.querySelector(".thumb-bar")
          //     const IMG = document.createElement("img");
          //     IMG.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wIYUbl1_kw8HeN1BRZK4LYhv8TcFNbp4HA&s"
              
          //     thumbbar.appendChild(IMG)
          // })
        });

        const addsong = document.querySelector(".btn");

        addsong.addEventListener("click", async(e)=>{
          console.log("JS loaded");

          e.preventDefault();

          const basePath = "/songs/"
          const title = document.querySelector("#title").value.trim();
          const artist = document.querySelector("#artist").value.trim();
          const file_url = `${basePath}${document.querySelector("#file_url").value.trim()}`;

          if(!title || !file_url){
            alert("Title and file_url needed!!");
            return;
          }

          try{
            const response = await fetch("http://localhost:5000/api/songs", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({title, artist, file_url})
            })
            
            if(response.ok){
              const newSong = await response.json();
              alert(`Song: ${newSong.title} added successfully `);
              console.log(`New song added ${newSong}`);

                  //clear the form input
                document.querySelector("#title").value = '';
                document.querySelector("#artist").value= '';
                document.querySelector("#file_url").value= '';

             
            }

            
            else{
              const error = await response.json();
              alert( error.error);
            }

          }
          catch(err){
            console.log("Fetch error: ", err);
            alert("Failed to upload, Is the backend running?")
          }
        })
    