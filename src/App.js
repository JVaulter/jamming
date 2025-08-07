import logo from './logo.svg';
import './App.css';
import { Tracklist } from './Components/Tracklist/Tracklist';

function App() {

  const tracks = [
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
  ];



  return (
    <div className="App">
      <Tracklist songTracks={tracks}/>
    </div>
  );
}

export default App;
