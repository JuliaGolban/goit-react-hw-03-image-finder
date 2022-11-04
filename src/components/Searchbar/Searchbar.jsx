import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../Icons/search.svg';
import IconButton from '../Buttons/IconButton/IconButton';
import css from './Searchbar.module.css';

class Searchbar extends Component {

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form}>
                    <IconButton type="submit" aria-label="Search images">
                        <SearchIcon width="20" heigth="20" />
                    </IconButton>
                    <input
                        className={css.input}
                        type='text'
                        autoComplete='off'
                        autoFocus
                        placeholder='Search images and photos'
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;