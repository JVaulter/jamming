import { Tracklist } from "../Tracklist/Tracklist";

export const SearchResults = ({results}) => {
    return (
        <div>
            <h1>Results</h1>
            <Tracklist songTracks={results}/>
        </div>
    );
}