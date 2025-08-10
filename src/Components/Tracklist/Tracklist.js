import React from 'react';
import styles from './Tracklist.component.css';

export const Tracklist = ({ songTracks, button, removeTrack, addTrack }) => {

    return (
        <div>
            {songTracks.map((track) => {
                return (
                    <div key={track.id} className={styles.TrackItem}>
                        <h3>{track.name}</h3>
                        <p>{track.artist} | {track.album}</p>
                        {
                            button === "searchResults" ? (
                                <button onClick={() => addTrack(track)} className={styles.buttonStyle}>+</button>
                            ) : (
                                <button onClick={() => removeTrack(track)} className={styles.buttonStyle}>-</button>
                            )
                        }
                    </div>
                )
            })}
        </div>
    );
}