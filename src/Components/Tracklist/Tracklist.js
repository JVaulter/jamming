import React from 'react';
import styles from './Tracklist.component.css';

export const Tracklist = ({ songTracks, button }) => {

    const [tracks, setTracks] = React.useState(songTracks);

    const AddTrack = (track) => {
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        } else {
            setTracks(prev => [...prev, track]);
        }
    }
    const RemoveTrack = (track) => {
        setTracks(tracks.filter(savedTrack => savedTrack.id !== track.id));
    }

    return (
        <div>
            {tracks.map((track) => {
                return (
                    <div key={track.id} className={styles.TrackItem}>
                        <h3>{track.name}</h3>
                        <p>{track.artist} | {track.album}</p>
                        {
                            button === "searchResults" ? (
                                <button onClick={() => AddTrack(track)} className={styles.buttonStyle}>+</button>
                            ) : (
                                <button onClick={() => RemoveTrack(track)} className={styles.buttonStyle}>-</button>
                            )
                        }
                    </div>
                )
            })}
        </div>
    );
}