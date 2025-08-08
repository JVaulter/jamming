
import './App.css';
import { Playlist } from './Components/Playlist/Playlist';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { SearchResults } from './Components/SearchResults/SearchResults';

function App() {

  const playlist = {
    name: "My Favorite Songs",
    tracks: [
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
    ]
  }

  const searchResults = [
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
  ];

  return (
    <div className="App">
      <Searchbar />
      <div className="results-playlist-wrapper">
        <SearchResults results={searchResults} />
        <Playlist playlist={playlist} />
      </div>


    </div>
  );
}

export default App;
