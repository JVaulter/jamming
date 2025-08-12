import { Tracklist } from "../Tracklist/Tracklist";
import React, { useState } from 'react';
import SaveToSpotifyButton from "../Buttons/SaveToSpotifyButton";
import './Playlist.component.css';

export const Playlist = ({ playlist, removeTrack }) => {
    const [name, setName] = useState(playlist.name);

    const trackUris = [
        "7kqhFEqZvl9ynxwD8No4qM",
        "2kKMxha1iB9SSosC7S3AXF",
        "6px340oxL4x4RrhLer462m",
        "3S1fsqAI2wseDq6JcpamoY",
        "6GsP3uMCd0Dn5T37C93waZ"
    ]

    const handleSaveToSpotify = () => {
        // Logic to save the playlist to Spotify using the trackUris

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
                <SaveToSpotifyButton onClick={() => { }} />
            </div>
        </div>
    );
}
