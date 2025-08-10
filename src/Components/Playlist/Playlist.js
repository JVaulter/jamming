import { Tracklist } from "../Tracklist/Tracklist";
import React, { useState } from 'react';

export const Playlist = ({ playlist, removeTrack }) => {
    const [name, setName] = useState(playlist.name);



    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <Tracklist songTracks={playlist.tracks} removeTrack={removeTrack} />
            </div>
        </div>
    );
}
