import  './SaveToSpotify.component.css';

export const SaveToSpotifyButton = ({handleSaveToSpotify}) => {
    return (
        <button className="saveToSpotifyButton" onClick={handleSaveToSpotify}>
            Save to Spotify
        </button>
    );
}

export default SaveToSpotifyButton;