import React from 'react';
import { SearchButton } from '../Buttons/SearchButton';
import styles from  './Searchbar.component.css';

export const Searchbar = () => {
    return (
        <div className={styles.SearchBar}>
            <form >
                <div className={styles.SearchBarFields}>
                    <input placeholder="Enter a song" />
                </div>
                <div className={styles.SearchBarSubmit}>
                    <SearchButton />
                </div>
            </form>
        </div>
    );
}