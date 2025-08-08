export const Tracklist = ({ songTracks }) => {
    return (
        <div>
            {songTracks.map((track) => {
                return (
                    <div key={track.id} className="track">
                        <h3>{track.name}</h3>
                        <p>{track.artist}|{track.album}</p>
                    </div>
                )
            })}
        </div>
    );
}