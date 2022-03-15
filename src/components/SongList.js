import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSong] = useState([
    { title: 'almost home', id: 1},
    { title: 'memory gospel', id: 2},
    { title: 'this wild darksners', id: 3}
  ])

  const [likes, setLikes] = useState(20)

  const addSong = (title) =>{
    // we still want the song array
    setSong([...songs, { title: title, id: uuidv4()}])
  }

  useEffect(()=> {
    console.log('use effect hook');
  }, [likes])

   return (
   <div className="song-list">
       <ul>
           {songs.map(song => {
             return(
              <li key={song.id}>{song.title}</li>
             )
           })}
       </ul>
       <NewSongForm addSong={addSong}/>
       <button onClick={()=> setLikes(likes + 1)}>Likes: {likes}</button>
   </div>
  )
}

export default SongList