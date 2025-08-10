import { Tracklist } from "../Tracklist/Tracklist";

export const SearchResults = ({ results, addTrack }) => {

    const button = "searchResults";
    return (
        <div>
            <h1>Results</h1>
            <Tracklist songTracks={results} button={button} addTrack={addTrack} />
        </div>
    );
}