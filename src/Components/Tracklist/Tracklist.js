import React from 'react';
import styles from './Tracklist.component.css';

export const Tracklist = ({ songTracks }) => {
    return (
        <div>
            {songTracks.map((track) => {
                return (
                    <div key={track.id} className={styles.TrackItem}>
                        <h3>{track.name}</h3>
                        <p>{track.artist} | {track.album}</p>
                    </div>
                )
            })}
        </div>
    );
}