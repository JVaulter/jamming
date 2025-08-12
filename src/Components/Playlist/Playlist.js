import { Tracklist } from "../Tracklist/Tracklist";
import React, { useState } from 'react';
import SaveToSpotifyButton from "../Buttons/SaveToSpotifyButton";
import './Playlist.component.css';

export const Playlist = ({ playlist, removeTrack }) => {
    const [name, setName] = useState(playlist.name);
    const url = "https://api.spotify.com/v1/tracks/"

    const trackUris = [
        "7kqhFEqZvl9ynxwD8No4qM",
        "2kKMxha1iB9SSosC7S3AXF",
        "6px340oxL4x4RrhLer462m",
        "3S1fsqAI2wseDq6JcpamoY",
        "6GsP3uMCd0Dn5T37C93waZ"
    ]

    const handleSaveToSpotify = async () => {
        // Logic to save the playlist to Spotify using the trackUris
        const endpoint = `${url}${trackUris[0]}`

        try {

              const response = await fetch(endpoint)

              const data = await response.json();
                console.log("Track data:", data);
        } catch (error) {
            console.error("Error saving to Spotify:", error);
        }
      




    }




    return (
        <div>
            <div>
                <input type="text" onChange={(text) => setName(prev => prev = text)} value={name} className="playlistName" />
            </div>
            <div>
                <Tracklist songTracks={playlist.tracks} removeTrack={removeTrack} />
            </div>
            <div>
                <SaveToSpotifyButton handleSaveToSpotify={handleSaveToSpotify} />
            </div>
        </div>
    );
}
