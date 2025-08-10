
import { useState } from 'react';
import './App.css';
import { Playlist } from './Components/Playlist/Playlist';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { SearchResults } from './Components/SearchResults/SearchResults';

function App() {
  // Initial playlist and search results
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera"
    },
    {
      id: 2,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller"
    },
    {
      id: 3,
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "Divide"
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind"
    },
    {
      id: 5,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21"
    }
  ]);
  const [search_Results, setSearch_Results] = useState([
    {
      id: 6,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours"
    },
    {
      id: 7,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia"
    },
    {
      id: 8,
      name: "Peaches",
      artist: "Justin Bieber",
      album: "Justice"
    },
    {
      id: 9,
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line"
    },
    {
      id: 10,
      name: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR"
    }
  ]);

  // Functions to add and remove tracks from the playlist
  const AddTrack = (track) => {
    if (playlistTracks.find(t => t.id === track.id)) {
      return;
    } else {
      setPlaylistTracks(prev => [...prev, track]);
    }
  }
  const RemoveTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(t => t.id !== track.id));
  }


  return (
    <div className="App">
      <Searchbar />
      <div className="results-playlist-wrapper">
        <SearchResults
          results={search_Results}
          addTrack={AddTrack} />

        <Playlist
          playlist={{ name: "My Favorite Songs", tracks: playlistTracks }}
          removeTrack={RemoveTrack} />
      </div>


    </div>
  );
}

export default App;
