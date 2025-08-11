import { Tracklist } from "../Tracklist/Tracklist";
import React, { useState } from 'react';
import SaveToSpotifyButton from "../Buttons/SaveToSpotifyButton";

export const Playlist = ({ playlist, removeTrack }) => {
    const [name, setName] = useState(playlist.name);



    return (
        <div>
            <div>
                <input type="text" onChange={(text) => setName(prev => prev = text)} value={name} />
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
