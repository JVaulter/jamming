import React from 'react';
import { SearchButton } from '../Buttons/SearchButton';
import  './Searchbar.component.css';

export const Searchbar = () => {
    return (
        <div className="SearchBar">
            <form >
                <div className="SearchBarFields">
                    <input placeholder="Enter a song" />
                </div>
                <div>
                    <SearchButton />
                </div>
            </form>
        </div>
    );
}