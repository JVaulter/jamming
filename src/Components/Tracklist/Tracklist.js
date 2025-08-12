import React from 'react';
import './Tracklist.component.css';

export const Tracklist = ({ songTracks, button, removeTrack, addTrack }) => {

    return (
        <div>
            {songTracks.map((track) => {
                return (
                    <div key={track.id} className="TrackItem">
                        <h3>{track.name}</h3>
                        <p>{track.artist} | {track.album}</p>
                        {
                            button === "searchResults" ? (
                                <button onClick={() => addTrack(track)} className="buttonStyle">+</button>
                            ) : (
                                <button onClick={() => removeTrack(track)} className="buttonStyle">-</button>
                            )
                        }
                    </div>
                )
            })}
        </div>
    );
}